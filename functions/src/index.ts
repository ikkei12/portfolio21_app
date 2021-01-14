import * as functions from 'firebase-functions'
// import * as fs from 'fs'
// import * as admin from 'firebase-admin'
// import { createCanvas, loadImage } from 'canvas'

const cors = require('cors')({ origin: true })
export const helloWorld = functions
  .region('asia-northeast1')
  .https.onRequest((req, res) => {
    return cors(req, res, async () => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      )
      const cheerio = require('cheerio')
      const request = require('request')
      const url = req.body.url
      await request(url, (e: any, _res: any, html: any) => {
        if (e) {
          console.error(e)
        }
        try {
          const ogp = {
            title: '',
            description: '',
            image: '',
          }
          const $ = cheerio.load(html)
          ogp.title = $('title').text()
          ogp.image = $("meta[property='og:image']").attr('content')
          ogp.description = $("meta[property='og:description']").attr('content')

          res.send({ ogp })
        } catch (e) {
          console.error(e)
          res.status(500).send({ error: e })
        }
      })
    })
  })

// /**
//  * API
//  * @param title OGPを作る文字列
//  * @param questionId questionID
//  */
// export const createOgpImageAndSave = functions.https.onRequest(
//   (request, response) => {
//     response.set('Access-Control-Allow-Origin', '*')

//     if (request.method === 'OPTIONS') {
//       // Send response to OPTIONS requests
//       response.set('Access-Control-Allow-Methods', 'GET')
//       response.set('Access-Control-Allow-Headers', 'Content-Type')
//       response.set('Access-Control-Max-Age', '3600')
//       response.status(204).send('')
//     } else {
//       const body = request.body
//       const image = await _createOgp(body.title)
//       await upload(image)
//       response.send('ok')
//     }
//   }
// )

// const createOGP = async (title) => {
//   const W = 1200
//   const H = 630

//   const canvas = createCanvas(W, H)
//   const ctx = canvas.getContext('2d')

//   // 背景画像の描画
//   const baseImage = await loadImage(baseImagePath)
//   ctx.drawImage(baseImage, 0, 0, W, H)

//   return canvas.toBuffer()
// }

// const upload = async (image: Buffer): Promise<void> => {
//   const loaclTargetPath = `/tmp/target.png`
//   const localBasePath = '/tmp/base.png'
//   const targetPath = `${CLOUD_STORAGE_KEYS.QUESTION}/ogp.png`
//   const basePath = `${CLOUD_STORAGE_KEYS.QUESTION}/base.png`

//   // （Syncはやめといた方が良いよ）
//   fs.writeFileSync(loaclTargetPath, image)

//   // Storageにアップロード
//   await bucket.upload(loaclTargetPath, { destination: targetPath })

//   // tmpファイルの削除
//   fs.unlinkSync(localBasePath)
//   fs.unlinkSync(loaclTargetPath)
// }
