<template>
  <div>
    <Dot :size="18" color="grey" />
    <p>{{ node.date }}</p>
    <p>{{ node.title }}</p>
    <p>{{ node.description }}</p>
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
