<template>
  <div class="list-item" @mouseover="onMouseOver">
    <p class="list-item__index">{{ itemIndex }}.</p>
    <p class="list-item__text">{{ product.title }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    const onMouseOver = () => {
      context.emit('onMouseOver', props.product)
    }
    const itemIndex = computed(() => {
      if (props.index <= 9) return '0' + props.index
      else return props.index
    })
    return { onMouseOver, itemIndex }
  },
})
</script>
<style scoped lang="scss">
.list-item {
  display: flex;
  align-items: center;
  padding: 3vh 2vw;
  cursor: pointer;
  border-bottom: 2px solid rgb(220, 220, 220);
  .list-item__index {
    font-weight: bold;
    font-size: 1rem;
    margin-right: 3vw;
  }
  .list-item__text {
    font-weight: bold;
    font-size: 1.5rem;
  }
}
</style>
