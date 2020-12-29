<template>
  <div class="provider">
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
<style lang="scss" scoped>
.provider {
  widows: 100%;
  height: 100%;
}
</style>
