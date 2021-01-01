<template>
  <ArticlesProvider>
    <ArticlePage />
  </ArticlesProvider>
</template>

<script lang="ts">
import ArticlePage from '@/components/v1/templates/ArticlePage.vue'
import { defineComponent } from '@vue/composition-api'
import ArticlesProvider from '@/components/v1/providers/ArticlesProvider.vue'
export default defineComponent({
  components: {
    ArticlePage,
    ArticlesProvider,
  },
})
</script>
