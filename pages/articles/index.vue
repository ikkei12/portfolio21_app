<template>
  <ArticlesProvider>
    <ArticlePage :articles="articles" :categories="categories" :title="title" />
  </ArticlesProvider>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import ArticlePage from '@/components/v1/templates/ArticlePage.vue'
import { defineComponent } from '@vue/composition-api'
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
    const existURLs = qiitaArticleRecords.map((ogp: QiitaArticle) => {
      return ogp.url
    })
    const latestOgps = await $axios
      .get('https://qiita.com/api/v2/authenticated_user/items', {
        headers: {
          Authorization: `Bearer ${process.env.QIITA_API_KEY}`,
        },
      })
      .then((res) => {
        return res.data
      })
      .catch((e) => {
        console.log(e)
      })
    const qiitaArticle: qiitaArticle = {}
    latestOgps.forEach((qiita: QiitaArticle) => {
      if (existURLs.includes(qiita.url)) return
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
        .then((res) => {
          qiitaArticle.image = res.data.ogp.image
          qiitaArticle.description = res.data.ogp.description
          qiitaArticle.title = res.data.ogp.title
          qiitaArticle.url = qiita.url
        })
        .catch((e) => console.error(e))
    })

    console.log(qiitaArticleRecords)

    return { articles, categories, title }
  },
})
</script>

<style lang="scss" scoped></style>
