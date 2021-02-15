// import {
//   NuxtContentHTMLElement,
//   ParsedHTMLElement,
//   ParsedTextNode,
// } from '~/@types/DOMParser'
class DOMParser {
  static parse() {
    const fs = require('fs')
    const path = require('path')
    const resolvedPath = path.resolve(__dirname, './template.html')
    const html = fs.readFileSync(resolvedPath, 'utf8')
    const { parse } = require('node-html-parser')
    // NOTE: attributesを対応させる為に改行を削除
    const root = parse(html.replace(/\n/g, ''))

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
    const res = {
      type: 'element',
      props: {
        id: '',
        className: [],
      },
      tag: 'div',
      children: [],
    }
    const test = (current, prev) => {
      current.childNodes.forEach((el) => {
        if (el.nodeType === 1) {
          // NOTE: HTMLElement(nodeType = 1)
          // if (el.rawTagName == 'categorychips') {
          // }
          const node = {
            type: 'element',
            tag: el.rawTagName,
            props: {
              id: '',
              className: [],
            },
            children: [],
          }
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
          splittedAttributes.forEach((attribute) => {
            if (attribute[0] === 'class') {
              node.props.className.push(attribute[1])
            } else {
              node.props[attribute[0]] = attribute[1]
            }
          })

          if (res.children.length === 0) {
            res.children.push(node)
          } else {
            const searchAndPush = (target) => {
              if (target.children) {
                target.children.forEach((t) => {
                  if (t === prev) {
                    return t
                  } 
                  return searchAndPush(t)
                })
              } else {
                return {}
              }
            }
            // const a = res.children.find((childNode) => {
            //   return childNode === prev
            // })
            // console.log(current)
            const a = searchAndPush(res)
            console.log(a)

            if (a) {
              a.children.push(node)
            }
          },0
          test(el, node)

          // if (el.id) node.props.id = el.id

          // if (el.classNames) {
          //   for (let i = 0; i < el.classNames.length; i++) {
          //     node.props.className.push(el.classNames[i])
          //   }
          // }
          // array.push(node)
        } else if (el.nodeType === 3) {
          // NOTE: text(nodeType = 3)
          const node = {
            type: 'text',
            value: el.rawText,
          }
          if (res.children.length === 0) {
            res.children.push(node)
          } else {
            const a = res.children.find((childNode) => {
              return childNode === prev
            })
            // console.log(current)
            if (a) {
              if (a.childNodes) a.childNodes.push(node)
            }
          }
        }
      })
    }
    test(root, res)

    return res
  }
}

DOMParser.parse()
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
