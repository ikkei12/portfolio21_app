<template>
  <div>
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
  props: {
    categories: {
      type: Array,
    },
  },
})
</script>
<style scoped lang="scss"></style>
