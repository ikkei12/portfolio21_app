declare type OGP = {
  title?: string
  description?: string
  url?: string
  image?: string
}

declare type QiitaArticleAPIResponse = {
  // eslint-disable-next-line camelcase
  likes_count?: number
}

declare type QiitaArticle = OGP & {
  id?: string
  likesCount?: number
  isShow: boolean
  tags?: string[]
}
