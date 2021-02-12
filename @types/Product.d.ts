type Image = {
  url: string
}

export type ProductContent = {
  productId: number
  order: number
  description: string
  image: Image
  createdAt: string
  updatedAt: string
  revisedAt: string
  publishedAt: string
}

export type Product = {
  id?: string
  title?: string
  productionPeriod?: string
  url?: string
  createdDate?: string
  contents?: ProductContent[]
  createdAt?: string
  updatedAt?: string
  revisedAt?: string
  publishedAt?: string
}
