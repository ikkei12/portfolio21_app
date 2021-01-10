<template>
  <div class="categories-list">
    <nuxt-link to="/articles" class="list-item__link">
      <h3>記事一覧</h3></nuxt-link
    >
    <h4 class="categoryies-list__title">カテゴリー</h4>
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
  box-shadow: 0 0px 10px rgba(89, 89, 89, 0.072);
  .categoryies-list__title {
    padding: 1vh;
    padding-bottom: 0.5vh;
    color: #034646;
  }
  .list-item__link {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    h3 {
      padding: 1vh;
      font-weight: bold;
      color: #034646;
    }
  }
}
</style>
