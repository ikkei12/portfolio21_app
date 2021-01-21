declare type OGP = {
  title: string
  description: string
  url: string
  image: string
}

declare type QiitaArticle = OGP & {
  likesCount: number
}
