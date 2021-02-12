import { reactive } from '@vue/composition-api'
import { Product } from '~/@types/Product'

export default function ProductsStore() {
  const state = reactive({
    currentProduct: <Product>{
      contents: [{ image: { url: '' } }],
    },
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
