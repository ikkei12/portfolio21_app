<template>
  <div class="product-detail__page"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Pagination from '@/components/v1/molecules/Pagination.vue'
export default defineComponent({
  components: { Pagination },
  props: {
    product: {
      type: Object as PropType<Product>,
      require: true,
    },
  },
})
</script>
<style scoped lang="scss">
.product-detail__page {
  padding-top: 60px;
  height: 100vh;
  width: 100%;
  position: relative;
  animation: fadeIn 2s;
  .swiper__wrapper {
    position: relative;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
