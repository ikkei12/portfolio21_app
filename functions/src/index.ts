import * as functions from 'firebase-functions'
// import * as fs from 'fs'
// import * as admin from 'firebase-admin'
// import { createCanvas, loadImage } from 'canvas'
const cors = require('cors')({ origin: true })

const notifySlack = (message: String) => {
  const { IncomingWebhook } = require('@slack/webhook')
  const webhook = new IncomingWebhook(functions.config().slack.webhookurl)
  ;(async () => {
    await webhook.send({
      text: message,
    })
  })()
}

export const getOgpInfo = functions
  .region('asia-northeast1')
  .https.onRequest((req, res) => {
    return cors(req, res, async () => {
      res.set('Access-Control-Allow-Origin', '*')
      res.set('Access-Control-Allow-Methods', 'POST')
      res.set('Access-Control-Allow-Headers', 'Content-Type')
      res.set('Access-Control-Max-Age', '3600')

      const cheerio = require('cheerio')
      const request = require('request')
      const url = req.body.url
      console.log(url)

      await request(url, (e: any, _res: any, html: any) => {
        if (e) {
          console.error(e)
          notifySlack(e)
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
          notifySlack(e)
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
//     const createOGP = async (title) => {
//       const W = 1200
//       const H = 630

//       const canvas = createCanvas(W, H)
//       const ctx = canvas.getContext('2d')

//       // 背景画像の描画
//       const baseImage = await loadImage(baseImagePath)
//       ctx.drawImage(baseImage, 0, 0, W, H)

//       return canvas.toBuffer()
//     }

//     const upload = async (image: Buffer): Promise<void> => {
//       const loaclTargetPath = `/tmp/target.png`
//       const localBasePath = '/tmp/base.png'
//       const targetPath = `${CLOUD_STORAGE_KEYS.QUESTION}/ogp.png`
//       const basePath = `${CLOUD_STORAGE_KEYS.QUESTION}/base.png`

//       // （Syncはやめといた方が良いよ）
//       fs.writeFileSync(loaclTargetPath, image)

//       // Storageにアップロード
//       await bucket.upload(loaclTargetPath, { destination: targetPath })

//       // tmpファイルの削除
//       fs.unlinkSync(localBasePath)
//       fs.unlinkSync(loaclTargetPath)
//     response.set('Access-Control-Allow-Origin', '*')

//     if (request.method === 'OPTIONS') {
//       // Send response to OPTIONS requests
//       response.set('Access-Control-Allow-Methods', 'GET')
//       response.set('Access-Control-Allow-Headers', 'Content-Type')
//       response.set('Access-Control-Max-Age', '3600')
//       response.status(204).send('')
//     } else {
//       const body = request.body
//       const image = await createOgp(body.title)
//       await upload(image)
//       response.send('ok')
//     }
//   }
// )

// FIX: ベータ版の機能だからかfirebase-functionsの現バージョンで使えない？
// exports.sendOnRegressedIssue = functions.crashlytics
//   .issue()
//   .onRegressed(async (issue) => {
//     const issueId = issue.issueId
//     const issueTitle = issue.issueTitle
//     const appName = issue.appInfo.appName
//     const appPlatform = issue.appInfo.appPlatform
//     const latestAppVersion = issue.appInfo.latestAppVersion

//     const slackMessage =
//       `<!here|here> There is a new issue - ${issueTitle} (${issueId}) ` +
//       `in ${appName}, version ${latestAppVersion} on ${appPlatform}`

//     await notifySlack(slackMessage)
//     console.log(`Posted new issue ${issueId} successfully to Slack`)
//   })
