<template>
  <Card class="career__card">
    <h3 class="title">Career</h3>
    <CareerTree :career-nodes="careerNodes" />
  </Card>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Card from '@/components/v1/molecules/Card.vue'
import CareerTree from '@/components/v1/organisms/CareerTree.vue'

export default defineComponent({
  props: {
    careerNodes: {
      type: Array as PropType<CareerNode[]>,
    },
  },
  components: {
    Card,
    CareerTree,
  },
})
</script>
<style scoped lang="scss">
.career__card {
  border-radius: 20px;
  .title {
    margin-bottom: 8px;
  }
}
</style>
