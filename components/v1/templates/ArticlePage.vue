<template>
  <div class="article-page">
    <ArticleCardsGroup :articles="articles" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import ArticleCardsGroup from '@/components/v1/organisms/ArticleCardsGroup.vue'

export default defineComponent({
  components: { ArticleCardsGroup },
  props: {
    articles: {
      type: Array as PropType<ArticleCard[]>,
    },
  },
})
</script>
<style scoped>
.article-page {
  background: #fafafa;
  padding-top: 120px;
  display: flex;
  justify-content: center;
}
</style>
