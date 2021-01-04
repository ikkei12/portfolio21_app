<template>
  <ProductsProvider>
    <ProductDetailPage :product="product" />
  </ProductsProvider>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ProductDetailPage from '@/components/v1/templates/ProductDetailPage.vue'
export default defineComponent({
  components: {
    ProductDetailPage,
  },
  async asyncData({ $axios, params }) {
    const path = `/products/${params.id}`
    const product = await $axios
      .get(path)
      .then((res) => {
        return res.data
      })
      .catch((e) => {
        console.error(e)
      })

    return { product }
  },
})
</script>
