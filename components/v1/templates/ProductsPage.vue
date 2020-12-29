<template>
  <div class="products-page__container">
    <ProductsList :products="products" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import ProductsList from '@/components/v1/organisms/ProductsList.vue'
export default defineComponent({
  name: 'ProductsPage',
  components: {
    ProductsList,
  },
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
})
</script>
<style scoped>
.products-page__container {
  padding: 10rem 3rem;
}
</style>
