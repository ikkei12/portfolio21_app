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
  nodeType: number
  rawTagName: string
}
