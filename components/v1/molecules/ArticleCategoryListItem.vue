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

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<ArticleCategoryItem>,
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
    padding: 1vh;
    border-bottom: 1px solid #efefef;
    overflow-x: scroll;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
