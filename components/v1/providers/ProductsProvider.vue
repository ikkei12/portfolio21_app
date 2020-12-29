<template>
  <div class="log-in__provider w-full">
    <slot />
  </div>
</template>
<script>
import { defineComponent, provide } from '@vue/composition-api'
import ProductsStoreKey from '@/components/v1/storeKeys/ProductsStoreKey.ts'
import ProductsStore from '~/store/products'

export default defineComponent({
  setup(_props, _context) {
    provide(ProductsStoreKey, ProductsStore())
    return {}
  },
})
</script>
