<template>
  <div class="container">
    <ProductPage :products="products" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import ProductPage from '@/components/v1/templates/ProductsPage.vue'
export default defineComponent({
  components: {
    ProductPage,
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
