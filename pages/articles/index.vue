<template>
  <ArticlesProvider>
    <ArticlePage :articles="articles" />
  </ArticlesProvider>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import ArticlePage from '@/components/v1/templates/ArticlePage.vue'
import { defineComponent } from '@vue/composition-api'
import ArticlesProvider from '@/components/v1/providers/ArticlesProvider.vue'
export default defineComponent({
  components: {
    ArticlePage,
    ArticlesProvider,
  },
  async asyncData({ $content }: Context) {
    const articles = await $content('articles')
      .sortBy('createdDate', 'asc')
      .fetch()
    return { articles }
  },
})
</script>

<style lang="scss" scoped></style>
