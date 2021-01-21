<template>
  <nuxt-link :to="category.url" class="category-item__link {">
    <div class="category-item">
      <p class="category-item__title">
        {{ category.title }} ({{ category.count }})
      </p>
    </div>
  </nuxt-link>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { ArticleCategoryItem } from '~/@types/Article'

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<ArticleCategoryItem>,
      default: {},
    },
  },
})
</script>
<style lang="scss" scoped>
.category-item__link {
  text-decoration: none;
  color: #006666;
  &:hover {
    .category-item {
      background: #00a6a618;
    }
  }
  .category-item {
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    border-bottom: 1px solid #0066660f;
    overflow-x: scroll;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
