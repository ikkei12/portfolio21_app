<template>
  <div class="container">
    <ProductsProvider>
      <ProductsPage />
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
})
</script>

<style></style>
