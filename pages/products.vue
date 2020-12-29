<template>
  <div class="container">
    <ProductsProvider>
      <ProductsPage :products="products" />
    </ProductsProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import ProductsPage from '@/components/v1/templates/ProductsPage.vue'
import ProductsProvider from '@/components/v1/providers/ProductsProvider.vue'

export default defineComponent({
  components: {
    ProductsPage,
    ProductsProvider,
  },
  setup(_props, context) {
    const products = reactive<Product[]>([])
    context.root.$axios
      .get('/products')
      .then((res) =>
        res.data.contents.forEach((product: Product) => products.push(product))
      )
      .catch((e) => console.log(e))

    return { products }
  },
})
</script>

<style></style>
