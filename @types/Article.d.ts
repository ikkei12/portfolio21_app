declare type Article = {
  id: Number
  thumbnail: string
  title: string
  description: string
  slug: string
  createdDate: string
  categories: string[]
}

declare type ArticleCategoryItem = {
  title: string
  count: number
  url: string
}

declare type Category = {
  id?: Number
  title: string
  slug?: string
  count?: Number
  url?: string
}
