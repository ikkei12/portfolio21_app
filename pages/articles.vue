<template>
  <div class="container">
    <div v-for="(article, i) in articles" :key="`article${i}`">
      <p>{{ article.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  async asyncData({ $content }) {
    const articlesContent = await $content('articles').fetch()
    const articles = articlesContent.map((article) => {
      return { title: article.toc[0].text }
    })
    return { articles }
  },
})
</script>

<style></style>
