import { InjectionKey } from '@vue/composition-api'
import { ArticlesStore } from '~/store/articles'

const ArticlesStoreKey: InjectionKey<ArticlesStore> = Symbol('ArticlesStore')
export default ArticlesStoreKey
