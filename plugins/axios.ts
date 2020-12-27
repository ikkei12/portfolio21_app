import { AxiosRequestConfig } from 'axios'

export let axios: any

export default function ({ _store, $axios }: any) {
  $axios.setBaseURL('https://portfolio21.microcms.io/api/v1')
  $axios.onRequest((config: AxiosRequestConfig) => {
    axios.defaults.headers.common['X-API-KEY'] =
      '0064cacd-8327-45f3-b842-e2c6a36c91a7'
    return config
  })

  axios = $axios
}
