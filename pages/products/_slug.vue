<template>
  <ProductsProvider>
    <ProductDetailPage :product="res[0]" />
  </ProductsProvider>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ProductDetailPage from '@/components/v1/templates/ProductDetailPage.vue'
export default defineComponent({
  components: {
    ProductDetailPage,
  },
  async asyncData({ $content, params }) {
    const slug = params.slug
    const res = await $content('products').where({ slug }).fetch()

    return { res }
  },
})
</script>
