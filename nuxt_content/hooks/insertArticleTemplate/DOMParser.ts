// export class DOMParser {
// static parse() {
const fs = require('fs')
const html = fs.readFileSync('./template.html', 'utf8')
const { parse } = require('node-html-parser')
const root = parse(html)

const array = []
root.childNodes.forEach((el: ParsedTextNode | ParsedHTMLElement) => {
  if (el.nodeType === 1) {
    // NOTE: HTMLElement
  } else if (el.nodeType === 3) {
    // NOTE: text
    array.push({
      type: 'text',
      value: el.rawText,
    })
  }
})
//   }
// }

// {
//     type: 'element',
//     tag: 'h1',
//     props: {
//       id: 'タイトル'
//     },
//     children: [
//       [Object],
//       [Object]
//     ]
//   },

// {
//     type: 'text',
//     value: '\n'
//   },
