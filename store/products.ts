import { reactive } from '@vue/composition-api'

export default function ProductsStore() {
  const state = reactive({
    currentProduct: <Product>{},
  })

  return {
    get currentProduct() {
      return state.currentProduct
    },
    setCurrentProduct(product: Product) {
      state.currentProduct = product
    },
  }
}

export type ProductsStore = ReturnType<typeof ProductsStore>
