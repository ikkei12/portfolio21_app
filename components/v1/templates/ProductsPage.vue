<template>
  <div class="products-page__container">
    <ProductsList :products="products" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, inject } from '@vue/composition-api'
import ProductsList from '@/components/v1/organisms/ProductsList.vue'
import ProductsStoreKey from '@/components/v1/storeKeys/ProductsStoreKey'

export default defineComponent({
  name: 'ProductsPage',
  components: {
    ProductsList,
  },
  setup(_props, context) {
    const productsStore = inject(ProductsStoreKey)
    const products = reactive<Product[]>([])
    context.root.$axios
      .get('/products')
      .then((res) => {
        productsStore.setCurrentProduct(res.data.contents[0])
        res.data.contents.forEach((product: Product) => products.push(product))
      })
      .catch((e) => console.log(e))

    return { products }
  },
})
</script>
<style scoped>
.products-page__container {
  padding: 0 3rem 0;
  height: 100vh;
  overflow: hidden;
}
</style>
