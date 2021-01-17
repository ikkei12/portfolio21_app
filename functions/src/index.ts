import * as fs from 'fs'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { createCanvas, loadImage } from 'canvas'
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

/**
 * API
 * @param title OGPを作る文字列
 * @param questionId questionID
 */
export const createOgpImageAndSave = functions.https.onRequest(
  (request, response) => {
    return cors(request, response, async () => {
      const createOgp = async (title: string, name: string) => {
        const baseImagePath = `${
          functions.config().cloud_storsge.path
        }/ogp/base.png`
        const W = 1200
        const H = 630
        console.log(title)
        console.log(name)
        const canvas = createCanvas(W, H)
        const ctx = canvas.getContext('2d')

        // 背景画像の描画
        const baseImage = await loadImage(baseImagePath)
        ctx.drawImage(baseImage, 0, 0, W, H)

        return canvas.toBuffer()
      }

      const upload = async (image: Buffer, slug: string): Promise<void> => {
        const loaclTargetPath = `/tmp/target.png`
        const localBasePath = '/tmp/base.png'
        const targetPath = `${
          functions.config().cloud_storsge.path
        }/ogp/files/${slug}.png`

        // （Syncはやめといた方が良いよ）
        fs.writeFileSync(loaclTargetPath, image)

        // Storageにアップロード
        await admin
          .storage()
          .bucket(functions.config().cloud_storsge.bucket)
          .upload(loaclTargetPath, { destination: targetPath })

        // tmpファイルの削除
        fs.unlinkSync(localBasePath)
        fs.unlinkSync(loaclTargetPath)
      }

      response.set('Access-Control-Allow-Origin', '*')

      if (request.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        response.set('Access-Control-Allow-Methods', 'GET')
        response.set('Access-Control-Allow-Headers', 'Content-Type')
        response.set('Access-Control-Max-Age', '3600')
        response.status(204).send('')
      } else {
        const body = request.body
        const image = await createOgp(body.title, body.name)
        await upload(image, body.slug)
        response.send('ok')
      }
    })
  }
)

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
