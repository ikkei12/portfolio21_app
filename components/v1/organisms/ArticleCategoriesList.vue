<template>
  <div class="categories-list">
    <h3 class="categoryies-list__title">カテゴリー</h3>
    <ArticleCategoryListItem
      v-for="(category, i) in categories"
      :key="`category-${i}`"
      :category="category"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ArticleCategoryListItem from '@/components/v1/molecules/ArticleCategoryListItem.vue'
export default defineComponent({
  components: {
    ArticleCategoryListItem,
  },
  props: {
    categories: {
      type: Array,
    },
  },
})
</script>
<style scoped lang="scss">
.categories-list {
  width: 100%;
  height: 100%;
  padding-top: 160px;
  .categoryies-list__title {
    padding: 1vh;
    color: #034646;
  }
}
</style>
