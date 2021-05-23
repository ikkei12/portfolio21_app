<template>
  <div class="list__wrapper">
    <div class="thumbnail__wrapper">
      <ProductsListThumbnail
        v-for="(product, i) in products"
        :key="'thumbnail' + i"
        :product="product"
        :url="product.contents[0].image.url"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'
import ProductsListItem from '@/components/v1/molecules/ProductsListItem.vue'
import ProductsListThumbnail from '@/components/v1/atoms/ProductsListThumbnail.vue'
import { Product } from '~/@types/Product'

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
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-top: 60px;

  .thumbnail__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  .list-items__wrapper {
    width: 80%;
    padding: 5rem 0;
    margin-left: 40%;
    height: 100%;
    z-index: 2;

    &::-webkit-scrollbar {
      display: none;
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
