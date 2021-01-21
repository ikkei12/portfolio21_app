<template>
  <ArticlesProvider>
    <ArticlePage
      :articles="articles"
      :categories="categories"
      :title="title"
      :qiita-articles="qiitaArticlesArray"
    />
  </ArticlesProvider>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import ArticlePage from '@/components/v1/templates/ArticlePage.vue'
import { defineComponent, reactive } from '@vue/composition-api'
import ArticlesProvider from '@/components/v1/providers/ArticlesProvider.vue'
import firebase from 'firebase'
import { Article, Category, CategoryContent } from '~/@types/Article'
export default defineComponent({
  components: {
    ArticlePage,
    ArticlesProvider,
  },
  async asyncData({ params, $content, $axios }: Context) {
    const articles = await $content('articles')
      .sortBy('createdDate', 'desc')
      .fetch()
    const categories: Category[] = []
    const categoryIds: Number[] = []
    const categoriesJson = (await $content(
      'categories'
    ).fetch()) as CategoryContent
    let title = ''
    articles.forEach((article: Article) => {
      if (article.category_ids) {
        article.category_ids.forEach((categoryId: Number) => {
          categoryIds.push(categoryId)
        })
      }
    })
    categoriesJson.categories?.forEach((category: Category) => {
      const count = categoryIds.filter((categoryId: Number) => {
        return category.id === categoryId
      }).length
      if (count === 0) return
      if (params.slug === category.slug) {
        title = category.title
      }
      categories.push({
        title: category.title,
        count,
        url: `/articles/categories/${category.slug}`,
      })
    })

    const qiitaArticleRecords: QiitaArticle[] = []
    await firebase
      .firestore()
      .collection('qiita_articles')
      .get()
      .then(async (querySnapshot) => {
        await querySnapshot.forEach(async (doc) => {
          await qiitaArticleRecords.push(doc.data() as QiitaArticle)
        })
      })
    const existArticlesIDs = await qiitaArticleRecords.map(
      (ogp: QiitaArticle) => {
        return ogp.id
      }
    )
    const latestQiitaArticles = await $axios
      .get('https://qiita.com/api/v2/authenticated_user/items', {
        headers: {
          Authorization: `Bearer ${process.env.QIITA_API_KEY}`,
        },
      })
      .then(async (res) => {
        return await res.data
      })
      .catch((e) => {
        console.log(e)
      })
    const qiitaArticlesArray = reactive<QiitaArticle[]>([])
    latestQiitaArticles.forEach((qiita: QiitaArticleResponse) => {
      if (existArticlesIDs.includes(qiita.id)) {
        // 既存DBに保存されているURLだった場合
        const data: QiitaArticle | undefined = qiitaArticleRecords.find(
          (record) => {
            return record.id === qiita.id
          }
        )
        if (data) return qiitaArticlesArray.push(data)
      }
      $axios
        .post(
          'https://asia-northeast1-portfolio21-56e7e.cloudfunctions.net/getOgpInfo',
          { url: qiita.url },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then(async (res) => {
          const qiitaArticle = {
            // qiitaAPIから取得した値
            id: qiita.id,
            url: qiita.url,
            likesCount: qiita.likes_count,
            tags: qiita.tags.map((tag: { name: string }) => {
              return tag.name
            }),
            // OGP情報取得functionsから取得した値
            title: qiita.title,
            description: res.data.ogp.description,
            image: res.data.ogp.image,
            isShow: true,
          }
          await firebase
            .firestore()
            .collection('qiita_articles')
            .doc()
            .set(qiitaArticle)
          qiitaArticlesArray.push(qiitaArticle)
        })
        .catch((e) => console.error(e))
    })

    return { articles, categories, title, qiitaArticlesArray }
  },
})
</script>

<style lang="scss" scoped></style>
