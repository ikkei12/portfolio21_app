<template>
  <div class="article-card">
    <img :src="article.thumbnail" />
    <p>{{ article.title }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
export default defineComponent({
  props: {
    article: {
      type: Object as PropType<ArticleCard>,
    },
  },
})
</script>
<style scoped lang="scss">
.article-card {
}
</style>
