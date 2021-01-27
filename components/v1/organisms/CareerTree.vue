<template>
  <div class="career-tree">
    <span class="node-dot__line"></span>
    <div class="career-tree__inner">
      <CareerTreeNode
        v-for="(node, i) in careerNodes"
        :key="`node${i}`"
        :node="node"
        class="career-tree__node"
        :class="{ '--w-desc': node.description }"
      />
    </div>
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
<style lang="scss" scoped>
.career-tree {
  position: relative;

  .node-dot__line {
    border: 1px solid rgb(207, 207, 207);
    width: 1px;
    height: 90%;
    position: absolute;
    left: 8px;
    top: 30px;
  }
}
</style>
