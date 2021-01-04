<template>
  <div class="container">
    <ProductsProvider>
      <ProductsPage :products="products" />
    </ProductsProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api'
import ProductsPage from '@/components/v1/templates/ProductsPage.vue'
import ProductsProvider from '@/components/v1/providers/ProductsProvider.vue'
// import ProductsStoreKey from '@/components/v1/storeKeys/ProductsStoreKey'
import productsStore from '@/store/products.ts'
export default defineComponent({
  components: {
    ProductsPage,
    ProductsProvider,
  },
  async asyncData({ $axios }) {
    const products = reactive<Product[]>([])
    const store = await productsStore()
    await $axios
      .get('/products')
      .then(async (res) => {
        await store.setCurrentProduct(res.data.contents[0])

        res.data.contents.forEach((product: Product) => products.push(product))
      })
      .catch((e) => console.log(e))
    return { products }
  },
})
</script>
<style scoped lang="scss">
.container {
}
</style>
