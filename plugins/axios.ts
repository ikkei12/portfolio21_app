import { AxiosRequestConfig } from 'axios'

export default function ({ $axios }: any) {
  $axios.setBaseURL('https://portfolio21.microcms.io/api/v1')
  $axios.onRequest((config: AxiosRequestConfig) => {
    config.headers.common['X-API-KEY'] = process.env.CMS_API_KEY
  })
}
