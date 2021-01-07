<template>
  <div>
    <p>{{ node.date }}</p>
    <p>{{ node.title }}</p>
    <p>{{ node.description }}</p>
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
