import { AxiosRequestConfig } from 'axios'

export default function ({ $axios }: any) {
  $axios.onRequest((config: AxiosRequestConfig) => {
    config.headers.common['Content-Type'] = 'application/json'
  })
}
