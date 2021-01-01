import { reactive } from '@vue/composition-api'

export default function ArticlesStore() {
  const state = reactive({
    articles: [],
  })

  return {
    get articles() {
      return state.articles
    },
    setArticles(payload: any) {
      state.articles = payload
    },
  }
}

export type ArticlesStore = ReturnType<typeof ArticlesStore>
