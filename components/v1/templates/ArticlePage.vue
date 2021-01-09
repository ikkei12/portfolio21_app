<template>
  <div class="article-page">
    <Title title="最新の記事" color="#AEDADA" />
    <ArticleCardsGroup :articles="articles" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import ArticleCardsGroup from '@/components/v1/organisms/ArticleCardsGroup.vue'
import Title from '@/components/v1/atoms/Title.vue'
export default defineComponent({
  components: { ArticleCardsGroup, Title },
  props: {
    articles: {
      type: Array as PropType<ArticleCard[]>,
    },
  },
})
</script>
<style lang="scss" scoped>
.article-page {
  padding-top: 120px;
  margin: 0 22.5% 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
