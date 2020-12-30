<template>
  <div class="container">
    <div v-for="(article, i) in articles" :key="`article${i}`">
      <p>{{ article.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { IContentDocument } from '@nuxt/content/types/content'

import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  async asyncData({ $content }: Context) {
    const articlesContent = await $content('articles').fetch()
    const articles = articlesContent.map((article: IContentDocument) => {
      return { title: article.toc[0].text }
    })
    return { articles }
  },
})
</script>

<style></style>
