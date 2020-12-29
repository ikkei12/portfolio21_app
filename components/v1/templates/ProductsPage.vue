<template>
  <div>
    <p />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'ProductsPage',
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
  setup(props) {
    console.log(props.products)
  },
})
</script>
