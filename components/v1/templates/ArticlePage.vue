<template>
  <div class="article-page">
    <div class="categories-list__wrapper">
      <ArticleCategoriesList :categories="categories" />
    </div>
    <div class="article-page__inner">
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
  width: 100%;
  justify-content: center;
  position: relative;
  .article-page__inner {
    max-width: 940px;
  }
  .categories-list__wrapper {
    position: absolute;
    right: 0;
    top: 0;
    width: 18%;
    height: 100%;
    background: white;
  }
}
</style>
