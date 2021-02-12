import { AxiosError, AxiosResponse } from 'axios'
import { OGP } from '~/@types/Ogp'

export class OGPHook {
  static async getOGP(url: string) {
    const ogp: OGP = {
      title: 'OGP',
      description: 'fetching data... \n Please wait for a while.',
      image: '/lazy.webp',
    }
    const axios = require('axios')
    if (!url) return
    await axios
      .post(
        'https://asia-northeast1-portfolio21-56e7e.cloudfunctions.net/getOgpInfo',
        { url },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res: AxiosResponse) => {
        ogp.image = res.data.ogp.image
        ogp.description = res.data.ogp.description
        ogp.title = res.data.ogp.title
        ogp.url = url
      })
      .catch((e: AxiosError) => {
        throw e
      })

    return ogp
  }
}
