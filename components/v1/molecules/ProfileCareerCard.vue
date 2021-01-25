<template>
  <Card class="career__card">
    <div class="card__inner">
      <h2 class="title">Career</h2>
      <CareerTree :career-nodes="careerNodes" />
    </div>
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
  border-radius: 8px;
  height: 50%;
  .card__inner {
    padding-bottom: 10px;
    overflow-y: hidden;
    .title {
      color: $primary;
    }
  }
}
</style>
