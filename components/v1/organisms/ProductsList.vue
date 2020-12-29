<template>
  <div class="list__wrapper">
    <div class="thumbnail__wrapper">
      <ProductsListThumbnail
        :url="productsStore.currentProduct.productContents[0].image.url"
      />
    </div>
    <div class="list-items__wrapper">
      <ProductsListItem
        v-for="(product, i) in products"
        :key="'product' + i"
        :product="product"
        :index="i + 1"
        @onMouseOver="dispatchEvent"
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
      productsStore.setCurrentProduct(product)
    }
    return { productsStore, dispatchEvent }
  },
})
</script>
<style scoped lang="scss">
.list__wrapper {
  height: 100%;
  display: flex;
  .thumbnail__wrapper {
    width: 40%;
  }
  .list-items__wrapper {
    width: 60%;
    padding: 0 5vw;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(212, 212, 212, 0.5);
    }
  }
}
</style>
