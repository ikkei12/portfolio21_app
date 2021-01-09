<template>
  <div class="article-page">
    <div><ArticleCategoriesList :categories="categories" /></div>
    <div>
      <Title title="最新の記事" color="#AEDADA" />
      <ArticleCardsGroup :articles="articles" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import ArticleCardsGroup from '@/components/v1/organisms/ArticleCardsGroup.vue'
import Title from '@/components/v1/atoms/Title.vue'
import ArticleCategoriesList from '@/components/v1/organisms/ArticleCategoriesList.vue'

export default defineComponent({
  components: { ArticleCardsGroup, Title, ArticleCategoriesList },
  props: {
    articles: {
      type: Array as PropType<ArticleCard[]>,
    },
    categories: {
      type: Array as PropType<ArticleCategoryItem[]>,
    },
  },
})
</script>
<style lang="scss" scoped>
.article-page {
  padding-top: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 940px;
}
</style>
