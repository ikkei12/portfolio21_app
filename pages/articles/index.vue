<template>
  <ArticlesProvider>
    <ArticlePage :articles="articles" />
  </ArticlesProvider>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { IContentDocument } from '@nuxt/content/types/content'
import ArticlePage from '@/components/v1/templates/ArticlePage.vue'
import { defineComponent } from '@vue/composition-api'
import ArticlesProvider from '@/components/v1/providers/ArticlesProvider.vue'
export default defineComponent({
  components: {
    ArticlePage,
    ArticlesProvider,
  },
  async asyncData({ $content }: Context) {
    const articlesContent = await $content('articles')
      .sortBy('createdAt', 'asc')
      .fetch()
    const articles = articlesContent.map((article: IContentDocument) => {
      return {
        title: article.title,
        slug: article.slug,
        thumbnail: article.thumbnail,
        createdAt: article.createdAt,
      }
    })

    return { articles }
  },
})
</script>

<style></style>
