import { createCanvas, loadImage } from 'canvas'
import * as functions from 'firebase-functions'

export const createOgp = async (title: string, name: string) => {
  const baseImagePath = `${functions.config().cloud_storage.path}/ogp/base.png`

  const W = 1200
  const H = 630
  const canvas = createCanvas(W, H)
  const ctx = canvas.getContext('2d')
  // 背景画像の描画
  const baseImage = await loadImage(baseImagePath)
  ctx.drawImage(baseImage, 0, 0, W, H)
  const fontSize = 50
  const isAlphabetOrNumberOrSymbol = (str: string) => {
    // NOTE: is str Alphabet ?
    const ratz = /[a-z]/
    const rAtZ = /[A-Z]/
    // NOTE: is str Number ?
    const r0t9 = /[0-9]/
    // NOTE: is str Symbol ?
    const rSymbol = /[(){}!?<>""''/*+-=]/
    return (
      ratz.test(str) || rAtZ.test(str) || r0t9.test(str) || rSymbol.test(str)
    )
  }
  const splitText = (text: string): Array<string> => {
    const titleLines = ['']
    let i = 0
    let letterCount = 0
    const countPerLine = 18
    // NOTE: 1文字で何カウント使うかどうか。減らした分だけ一行に多く詰め込める。
    const alphabetOrNumberLetterSize = 1
    const japaneseLetterSize = 1

    text.split('').forEach((letter) => {
      if (isAlphabetOrNumberOrSymbol(letter)) {
        if (letterCount + alphabetOrNumberLetterSize > countPerLine) {
          titleLines[i + alphabetOrNumberLetterSize] = letter
          letterCount = 0
          i += alphabetOrNumberLetterSize
          return
        } else {
          titleLines[i] += letter
        }
        letterCount += alphabetOrNumberLetterSize
      } else {
        if (letterCount + japaneseLetterSize > countPerLine) {
          titleLines[i + japaneseLetterSize] = letter
          letterCount = 0
          i += japaneseLetterSize
          return
        } else {
          titleLines[i] += letter
        }
        letterCount += japaneseLetterSize
      }
    })
    return titleLines
  }
  const lines = splitText(title)
  ctx.font = `bold ${fontSize}px Noto Sans`
  ctx.fillStyle = 'white'
  // NOTE: 文字の位置調整
  lines.forEach((line, i) => {
    if (i === 0) {
      ctx.fillText(
        line,
        (W - ctx.measureText(line).width) / 2,
        (H + fontSize / 2) / 2 + i * fontSize - 30
      )
    } else if (i === 1) {
      ctx.fillText(
        line,
        (W - ctx.measureText(line).width) / 2,
        (H + fontSize / 2) / 2 + i * fontSize - 10
      )
    } else if (i === 2) {
      ctx.fillText(
        line,
        (W - ctx.measureText(line).width) / 2,
        (H + fontSize / 2) / 2 + i * fontSize + 10
      )
    }
  })
  ctx.fillText(name, (W - ctx.measureText(name).width) / 2, H - 50)

  return canvas.toBuffer()
}
