<template>
  <div class="node">
    <div class="node__inner">
      <Dot :size="18" class="node-dot" color="#7db5b5" />
      <p class="date">{{ node.date }}</p>
      <p class="title">{{ node.title }}</p>
    </div>
    <div v-if="node.description" class="description__wrapper">
      <p class="description">{{ node.description }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Dot from '@/components/v1/atoms/Dot.vue'

export default defineComponent({
  components: {
    Dot,
  },
  props: {
    node: {
      type: Object as PropType<CareerNode>,
    },
  },
})
</script>
<style lang="scss" scoped>
.node {
  padding: 16px 0;

  .node__inner {
    display: flex;
    align-items: center;

    .date {
      margin: 0 14px;
      font-size: 14px;
      font-weight: bold;
      color: #565656;
    }

    .title {
      font-size: 15px;
      margin-left: 12px;
      font-weight: bold;
      letter-spacing: 0.8px;
    }
  }

  .description__wrapper {
    height: 18px;
    padding-left: 126px;
    display: inline-block;

    .description {
      color: $grey;
    }
  }
}
</style>
