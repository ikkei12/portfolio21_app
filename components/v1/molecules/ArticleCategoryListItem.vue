<template>
  <div>
    <p>{{ category.title }}</p>
  </div>
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
<style lang="scss" scoped></style>
