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
import { IContentDocument } from '@nuxt/content/types/content'

export default defineComponent({
  components: {
    ArticlePage,
    ArticlesProvider,
  },
  async asyncData({ params, $content }: Context) {
    const res = await $content('articles').sortBy('createdDate', 'asc').fetch()
    const articles = res.filter((article: Article) => {
      if (!article.categories) return false
      return article.categories.includes(params.slug)
    })

    const title = params.slug

    const categoryTitles: Array<String> = []
    const categories: ArticleCategoryItem[] = []
    res.forEach((article: IContentDocument) => {
      if (article.categories) {
        article.categories.forEach((category: string) => {
          if (!categoryTitles.includes(category)) {
            categoryTitles.push(category)
            categories.push({
              title: category,
              count: 1,
              url: `/articles/categories/${category}`,
            })
          } else {
            const index = categoryTitles.indexOf(category)
            categories[index].count += 1
          }
        })
      }
    })

    return { articles, categories, title }
  },
})
</script>

<style lang="scss" scoped></style>