<template>
  <div>
    <CareerTreeNode
      v-for="(node, i) in careerNodes"
      :key="`node${i}`"
      :node="node"
    />
  </div>
</template>
<script lang="ts">
import CareerTreeNode from '@/components/v1/molecules/CareerTreeNode.vue'
import { defineComponent, PropType } from '@vue/composition-api'
export default defineComponent({
  props: {
    careerNodes: {
      type: Array as PropType<CareerNode[]>,
    },
  },
  components: {
    CareerTreeNode,
  },
})
</script>
