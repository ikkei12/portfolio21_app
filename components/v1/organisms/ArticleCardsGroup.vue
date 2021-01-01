<template>
  <div class="article-card__group">
    <ArticleCard
      v-for="(article, i) in articles"
      :key="`article${i}`"
      :article="article"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import ArticleCard from '@/components/v1/molecules/ArticleCard.vue'

export default defineComponent({
  props: {
    articles: {
      type: Array as PropType<ArticleCard[]>,
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
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 12vw;
}
</style>
