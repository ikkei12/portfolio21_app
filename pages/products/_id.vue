<template>
  <ProductsProvider>
    <ProductDetailPage :product="state.product" />
  </ProductsProvider>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import ProductDetailPage from '@/components/v1/templates/ProductDetailPage.vue'
export default defineComponent({
  components: {
    ProductDetailPage,
  },
  setup(_props, context) {
    const path = context.root.$route.path
    const state = reactive({
      product: {},
    })
    const fetchContent = async () => {
      await context.root.$axios
        .get(path)
        .then(async (res) => {
          console.log(res.data)
          state.product = await res.data
        })
        .catch((e) => {
          console.error(e)
        })
    }
    fetchContent()

    return { state }
  },
})
</script>
