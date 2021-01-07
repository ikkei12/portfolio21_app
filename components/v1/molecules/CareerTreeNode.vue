<template>
  <div class="node">
    <div class="node__inner">
      <p class="date">{{ node.date }}</p>
      <p class="title">{{ node.title }}</p>
    </div>
    <div class="description__wrapper">
      <p>{{ node.description }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
export default defineComponent({
  props: {
    node: {
      type: Object as PropType<CareerNode>,
    },
  },
})
</script>
<style lang="scss" scoped>
.node {
  .node__inner {
    display: flex;
    .date {
      margin-right: 8px;
      font-size: 14px;
    }
    .title {
      font-size: 15px;
    }
  }
  .description__wrapper {
    height: 18px;
  }
}
</style>
