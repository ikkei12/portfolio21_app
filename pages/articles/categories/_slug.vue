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
    const articles = await $content('articles')
      .sortBy('createdDate', 'asc')
      .fetch()
    const categories: Category[] = []
    const categoryIds: Number[] = []
    const categoriesJson = await $content('categories').fetch()
    let title = ''

    articles.forEach((article: IContentDocument) => {
      if (article.category_ids) {
        article.category_ids.forEach((categoryId: Number) => {
          categoryIds.push(categoryId)
        })
      }
    })

    categoriesJson?.categories?.forEach((category: Category) => {
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

    return { articles, categories, title }
  },
})
</script>

<style lang="scss" scoped></style>
