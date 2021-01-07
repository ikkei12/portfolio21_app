<template>
  <div>
    <CareerTreeNode v-for="(node, i) in nodes" :key="`node${i}`" :node="node" />
  </div>
</template>
<script lang="ts">
import CareerTreeNode from '@/components/v1/molecules/CareerTreeNode.vue'
import { defineComponent, PropType } from '@vue/composition-api'
export default defineComponent({
  props: {
    nodes: {
      type: Array as PropType<Node[]>,
    },
  },
  components: {
    CareerTreeNode,
  },
})
</script>
