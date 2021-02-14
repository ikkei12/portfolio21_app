export type ParsedTextNode = {
  // eslint-disable-next-line no-use-before-define
  childNodes: Array<ParsedHTMLElement | ParsedTextNode>
  rawText: string
  nodeType: number
}

export type ParsedHTMLElement = {
  childNodes: Array<ParsedHTMLElement | ParsedTextNode>
  rawAttrs: string
  parentNode: ParsedHTMLElement | ParsedTextNode
  classNames: string[]
  id: string
  nodeType: number
  rawTagName: string
}

export type NuxtContentHTMLElement = {
  type?: string
  tag?: string
  props?: any
  children?: NuxtContentHTMLElement[]
}

// <ref *1> HTMLElement {
//   childNodes: [
//     HTMLElement {
//       childNodes: [Array],
//       rawAttrs: 'class="info"',
//       parentNode: [Circular *1],
//       classNames: [Array],
//       nodeType: 1,
//       rawTagName: 'div'
//     },
//     TextNode { childNodes: [], rawText: '\n', nodeType: 3 }
//   ],
//   rawAttrs: '',
//   parentNode: null,
//   classNames: [],
//   nodeType: 1,
//   rawTagName: null
// }
