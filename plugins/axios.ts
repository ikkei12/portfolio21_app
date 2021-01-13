import { AxiosRequestConfig } from 'axios'

export default function ({ $axios }: any) {
  $axios.onRequest((config: AxiosRequestConfig) => {
    config.headers.common['X-API-KEY'] = process.env.CMS_API_KEY
  })
}
