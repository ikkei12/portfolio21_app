<template>
  <div class="container">
    <ArticlePage :articles="articles" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { IContentDocument } from '@nuxt/content/types/content'
import ArticlePage from '@/components/v1/templates/ArticlePage.vue'

import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  components: {
    ArticlePage,
  },
  async asyncData({ $content }: Context) {
    const articlesContent = await $content('articles').fetch()
    const articles = articlesContent.map((article: IContentDocument) => {
      return { title: article.title, thumbnail: article.thumbnail }
    })
    return { articles }
  },
})
</script>

<style></style>
