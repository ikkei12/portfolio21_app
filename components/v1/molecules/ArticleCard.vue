<template>
  <div>
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
