// export class DOMParser {

import {
  NuxtContentHTMLElement,
  ParsedHTMLElement,
  ParsedTextNode,
} from '~/@types/DOMParser'

// static parse() {
const fs = require('fs')
const html = fs.readFileSync('./template.html', 'utf8')
const { parse } = require('node-html-parser')
const root = parse(html)

const array = []
root.childNodes.forEach((el: ParsedTextNode | ParsedHTMLElement) => {
  if (el.nodeType === 1) {
    // NOTE: HTMLElement
    el = el as ParsedHTMLElement
    const node: NuxtContentHTMLElement = {
      type: 'element',
      tag: el.rawTagName,
      props: {
        id: '',
        className: [],
      },
    }

    if (el.id) node.props.id = el.id

    if (el.classNames) {
      // el.classNames.forEach((class) => {
      //     node.props.className.push(class)
      // })
    }
    array.push(node)
  } else if (el.nodeType === 3) {
    // NOTE: text
    el = el as ParsedTextNode
    array.push({
      type: 'text',
      value: el.rawText,
    })
  }
})
console.log(root)
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
