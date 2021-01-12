<template>
  <div class="container">
    <ProductsProvider>
      <ProductsPage :products="products" />
    </ProductsProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ProductsPage from '@/components/v1/templates/ProductsPage.vue'
import ProductsProvider from '@/components/v1/providers/ProductsProvider.vue'
export default defineComponent({
  components: {
    ProductsPage,
    ProductsProvider,
  },
  async asyncData({ $content }) {
    const products = await $content('products')
      .sortBy('createdDate', 'desc')
      .fetch()
    console.log(products)
    return { products }
  },
})
</script>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}
</style>
