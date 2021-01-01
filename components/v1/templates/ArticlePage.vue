<template>
  <div>
    <ArticleCardsGroup :articles="articles" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import ArticleCardsGroup from '@/components/v1/organisms/ArticleCardsGroup.vue'
export default defineComponent({
  props: {
    articles: {
      type: Array as PropType<ArticleCard[]>,
    },
  },
  components: { ArticleCardsGroup },
})
</script>
