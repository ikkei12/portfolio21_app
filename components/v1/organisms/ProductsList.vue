<template>
  <div>
    <ProductsListThumbnail
      :url="
        productsStore.currentProduct.productContents
          ? productsStore.currentProduct.productContents[0].image.url
          : 'https://i.imgur.com/2IVtaiA.jpg'
      "
    />
    <div>
      <ProductsListItem
        v-for="(product, i) in products"
        :key="'product' + i"
        :product="product"
        @onItemClick="dispatchEvent"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, PropType } from '@vue/composition-api'
import ProductsListItem from '@/components/v1/molecules/ProductsListItem.vue'
import ProductsListThumbnail from '@/components/v1/atoms/ProductsListThumbnail.vue'
import ProductsStoreKey from '@/components/v1/storeKeys/ProductsStoreKey'

export default defineComponent({
  components: {
    ProductsListItem,
    ProductsListThumbnail,
  },
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
  setup(_props, _context) {
    const productsStore = inject(ProductsStoreKey)
    const dispatchEvent = (product: Product) => {
      console.log(product)
      productsStore.setCurrentProduct(product)
    }
    return { productsStore, dispatchEvent }
  },
})
</script>
