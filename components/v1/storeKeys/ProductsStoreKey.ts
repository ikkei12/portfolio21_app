import { InjectionKey } from '@vue/composition-api'
import { ProductsStore } from '~/store/products'

const ProductsStoreKey: InjectionKey<ProductsStore> = Symbol('ProductsStore')
export default ProductsStoreKey
