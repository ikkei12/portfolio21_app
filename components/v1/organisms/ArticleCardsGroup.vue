<template>
  <div class="article-card__group">
    <div class="inner">
      <ArticleCard
        v-for="(article, i) in articles"
        :key="`article${i}`"
        :article="article"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import ArticleCard from '@/components/v1/molecules/ArticleCard.vue'

export default defineComponent({
  props: {
    articles: {
      type: Array as PropType<Article[]>,
    },
  },
  components: {
    ArticleCard,
  },
})
</script>
<style scoped lang="scss">
.article-card__group {
  display: flex;
  justify-content: center;
  .inner {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>
