// export class DOMParser {

// import {
//   NuxtContentHTMLElement,
//   ParsedHTMLElement,
//   ParsedTextNode,
// } from '~/@types/DOMParser'

// static parse() {
const fs = require('fs')
const html = fs.readFileSync('./template.html', 'utf8')
const { parse } = require('node-html-parser')
// NOTE: attributesを対応させる為に改行を削除
const root = parse(html.replace(/\n/g, ''))

// console.log(
//   root.childNodes[0].rawAttrs
//     .replace(/\n/g, '')
//     .split('  ')
//     .map((str) => {
//       return str.split(' ').filter(function (s) {
//         return s
//       })
//     })
// )
const array = []

// <div class="chip__group">
// <chip
//   v-for="(chip, i) in chips"
//   :key="`chip${i}`"
//   :title="chip.title"
//   :slug="chip.slug"
// ></chip>
// </div>
// <nuxt-link :to="'/articles/categories/' + slug" class="chip__link">
// <div class="chip" :style="`border:1px solid grey`">
//   <p class="chip__text" :style="`color:grey`">{{ title }}</p>
// </div>
// </nuxt-link>
const test = (current) => {
  current.childNodes.forEach((el) => {
    if (el.nodeType === 1) {
      // NOTE: HTMLElement(nodeType = 1)
      // if (el.rawTagName == 'categorychips') {
      // }
      // const node = {
      //   type: 'element',
      //   tag: el.rawTagName,
      //   props: {
      //     id: '',
      //     className: [],
      //   },
      // }
      // NOTE: elのattributesはが全て['key=value','key=value',...]の形で配列に格納される
      const attributes = el.rawAttrs.split(' ').map((str) => {
        return str.split(' ').filter((s) => {
          return s
        })[0]
      })
      // NOTE: split('=')して、["key","value"]の形にする。
      const splittedAttributes = attributes
        .filter((s) => {
          return s
        })
        .map((s) => {
          return s.split('=')
        })
      console.log(el.rawTagName)
      test(el)

      // if (el.id) node.props.id = el.id

      // if (el.classNames) {
      //   for (let i = 0; i < el.classNames.length; i++) {
      //     node.props.className.push(el.classNames[i])
      //   }
      // }
      // array.push(node)
    } else if (el.nodeType === 3) {
      // NOTE: text(nodeType = 3)
      // array.push({
      //   type: 'text',
      //   value: el.rawText,
      // })
    }
  })
}
test(root)
//   }
// }

// // {
// //     type: 'element',
// //     tag: 'h1',
// //     props: {
// //       id: 'タイトル'
// //     },
// //     children: [
// //       [Object],
// //       [Object]
// //     ]
// //   },

// // {
// //     type: 'text',
// //     value: '\n'
// //   },
