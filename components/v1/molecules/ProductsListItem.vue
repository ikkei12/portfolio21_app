<template>
  <div @mouseover="onMouseOver">
    <p>{{ product.title }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props, context) {
    const onMouseOver = () => {
      context.emit('onMouseOver', props.product)
    }
    return { onMouseOver }
  },
})
</script>
