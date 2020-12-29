<template>
  <div class="product-detail__page">
    <p>{{ product.title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      require: true,
    },
  },
  setup(_props) {},
})
</script>
<style scoped lang="scss">
.product-detail__page {
  padding: 0 8vw;
  padding-top: 60px;
}
</style>
