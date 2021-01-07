<template>
  <div class="career-tree">
    <div class="dots-group">
      <Dot
        v-for="(dot, i) in careerNodes"
        :key="`dot${i}`"
        :size="18"
        class="career-tree__dot"
        :class="{ '--w-desc': dot.description }"
        color="grey"
      />
    </div>
    <div>
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
import Dot from '@/components/v1/atoms/Dot.vue'

export default defineComponent({
  props: {
    careerNodes: {
      type: Array as PropType<CareerNode[]>,
    },
  },
  components: {
    CareerTreeNode,
    Dot,
  },
})
</script>
<style lang="scss" scoped>
.career-tree {
  display: flex;
  .career-tree__dot {
    margin-bottom: 8px;
    &.--w-desc {
      margin-bottom: 26px;
    }
  }
  .career-tree__node {
    margin-bottom: 8px;
    height: 18px;
    &.--w-desc {
      height: 36px;
    }
  }
}
</style>
