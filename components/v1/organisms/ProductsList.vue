<template>
  <div class="list__wrapper">
    <div class="thumbnail__wrapper">
      <ProductsListThumbnail
        v-for="(product, i) in products"
        :key="'thumbnail' + i"
        :url="product.productContents[0].image.url"
        :active="product.id == currentProduct.id"
      />
    </div>
    <div class="list-items__wrapper">
      <ProductsListItem
        v-for="(product, i) in products"
        :key="'list-item' + i"
        :product="product"
        :index="i + 1"
        :active="product.id == currentProduct.id"
        @onMouseOver="dispatchEvent"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'
import ProductsListItem from '@/components/v1/molecules/ProductsListItem.vue'
import ProductsListThumbnail from '@/components/v1/atoms/ProductsListThumbnail.vue'

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
  setup(props, _context) {
    const currentProduct = ref<Product>({})
    const dispatchEvent = (product: Product) => {
      currentProduct.value = product
    }
    currentProduct.value = props.products[0]
    return {
      dispatchEvent,
      currentProduct,
    }
  },
})
</script>
<style scoped lang="scss">
.list__wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .thumbnail__wrapper {
    width: 45%;
    height: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
  }
  .list-items__wrapper {
    width: 80%;
    padding: 0 0 0 60px;
    margin-left: 40%;
    height: 100%;
    overflow-y: scroll;
    z-index: 2;
    padding-right: 10px;
    padding: 5rem 0;
    &::-webkit-scrollbar {
      display: none;
      // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
      // width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(212, 212, 212, 0.5);
    }
  }
}
@include sp {
  .list__wrapper {
    .thumbnail__wrapper {
      width: 100%;
      height: unset;
      z-index: 6;
      top: 60px;
      .thumbnail {
        bottom: unset;
        margin: unset;
        padding-top: 20px;
        background: $body_bg;
      }
    }
    .list-items__wrapper {
      width: 100%;
      margin-left: 0;
      display: block;
      padding-top: 340px;
    }
  }
}
</style>
