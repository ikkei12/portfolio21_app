import { IContentDocument } from '@nuxt/content/types/content'

export type Article = {
  id: Number
  thumbnail: string
  title: string
  description: string
  slug: string
  createdDate: string
  categories: string[]
  // eslint-disable-next-line camelcase
  category_ids: Number[]
}

export type ArticleContent = IContentDocument & {}

export type ArticleCategoryItem = {
  title: string
  count: number
  url: string
}

export type Category = {
  id?: number
  title: string
  slug?: string
  count?: Number
  url?: string
}

export type CategoryContent = IContentDocument & {
  categories: Category[]
}
