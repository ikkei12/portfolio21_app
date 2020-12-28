import { AxiosRequestConfig } from 'axios'

export let axios: any

export default function ({ _store, $axios }: any) {
  $axios.setBaseURL('https://portfolio21.microcms.io/api/v1')
  $axios.onRequest((config: AxiosRequestConfig) => {
    axios.defaults.headers.common['X-API-KEY'] = process.env.CMS_API_KEY
    return config
  })

  axios = $axios
}
