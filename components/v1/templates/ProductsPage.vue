<template>
  <div class="products-page__container">
    <ProductsList :products="products" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import ProductsList from '@/components/v1/organisms/ProductsList.vue'
import { IContentDocument } from '@nuxt/content/types/content'
export default defineComponent({
  name: 'ProductsPage',
  components: {
    ProductsList,
  },
  props: {
    products: {
      type: Array as PropType<IContentDocument[]>,
      required: true,
    },
  },
})
</script>
<style scoped lang="scss">
.products-page__container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
