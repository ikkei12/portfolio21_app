import * as fs from 'fs'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { createCanvas, loadImage } from 'canvas'
const cors = require('cors')({ origin: true })
admin.initializeApp()

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
      response.set('Access-Control-Allow-Origin', '*')
      response.set('Access-Control-Allow-Methods', 'POST')
      response.set('Access-Control-Allow-Headers', 'Content-Type')

      const createOgp = async (title: string, name: string) => {
        const baseImagePath = `${
          functions.config().cloud_storage.path
        }/ogp/base.png`

        const W = 1200
        const H = 630
        const canvas = createCanvas(W, H)
        const ctx = canvas.getContext('2d')
        // 背景画像の描画
        const baseImage = await loadImage(baseImagePath)
        ctx.drawImage(baseImage, 0, 0, W, H)
        const fontSize = 46
        const isAlphabetOrNumber = (str: string) => {
          const ratz = /[a-z]/
          const rAtZ = /[A-Z]/
          const r0t9 = /[0-9]/
          return ratz.test(str) || rAtZ.test(str) || r0t9.test(str)
        }
        const splitText = (text: string): Array<string> => {
          const titleLines = ['']
          let i = 0
          let letterCount = 0
          const countPerLine = 18
          text.split('').forEach((letter) => {
            if (isAlphabetOrNumber(letter)) {
              if (letterCount + 0.5 > countPerLine) {
                titleLines[i + 1] = letter
                letterCount = 0
                i += 1
                return
              } else {
                titleLines[i] += letter
              }
              letterCount += 0.5
            } else {
              if (letterCount + 1 > countPerLine) {
                titleLines[i + 1] = letter
                letterCount = 0
                i += 1
                return
              } else {
                titleLines[i] += letter
              }
              letterCount += 1
            }
          })
          return titleLines
        }
        const lines = splitText(title)
        ctx.font = `bold ${fontSize}px Helvetica`
        ctx.fillStyle = 'white'
        lines.forEach((line, i) => {
          ctx.fillText(
            line,
            (W - ctx.measureText(line).width) / 2,
            i === 0
              ? (H + fontSize / 2) / 2 + i * fontSize - 30
              : (H + fontSize / 2) / 2 + i * fontSize - 10
          )
        })
        ctx.fillText(name, (W - ctx.measureText(name).width) / 2, H - 50)

        return canvas.toBuffer()
      }

      const upload = async (image: Buffer, slug: string): Promise<void> => {
        const loaclTargetPath = `/tmp/target.png`
        const targetPath = `ogp/files/${slug}.png`

        fs.writeFileSync(loaclTargetPath, image)

        // Storageにアップロード
        await admin
          .storage()
          .bucket(functions.config().cloud_storage.bucket)
          .upload(loaclTargetPath, { destination: targetPath })

        // tmpファイルの削除
        fs.unlinkSync(loaclTargetPath)
      }

      const body = request.body
      const image = await createOgp(body.title, body.name)
      await upload(image, body.slug)
      response.send({
        url: `${functions.config().cloud_storage.path}/ogp/files/${
          body.slug
        }.png?authuser=1`,
      })
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
