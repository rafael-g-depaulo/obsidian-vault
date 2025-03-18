import { Node } from "ohm-js"

export type MacroAST = MacroAstNode[]

export type MacroAstNode = Text | Macro | MacroBody | MacroProp | List

class MacroAstNode_Base<NodeName extends string> {
  type: NodeName

  constructor(type: NodeName) {
    this.type = type
  }

  compile(): string {
    return `Not implemented compile method for ${this.type}`
  }
}

export class Text extends MacroAstNode_Base<'text'> {
  value: string

  constructor(value: string) {
    super('text')
    this.value = value
  }

  compile(): string {
    return "|text| "
    return this.value
  }
}

export class Macro extends MacroAstNode_Base<'macro'> {
  name: string
  body: MacroBody

  constructor(name: string, body: MacroBody) {
    super('macro')
    this.name = name
    this.body = body
  }

  compile() {
    const bodyContent = this.body.content

    if (!bodyContent) {
      // console.error("SADFSDFSDFSDF", this)
      return ""
    }
    // const asdasd = bodyContent
    //   .filter(a => a.type === "macroProp")
    //   .map(a => a.compile())

    // console.log(asdasd)
    return `Macro: ${this.name}\n`
  }
}

export class MacroBody extends MacroAstNode_Base<'macroBody'> {
  content: MacroBodyItem[]
  constructor(content: MacroBodyItem[]) {
    super('macroBody')
    this.content = content
  }
}

export type MacroBodyItem = Text | Macro | MacroProp

export class MacroProp extends MacroAstNode_Base<'macroProp'> {
  key: string
  value: MacroPropValue[]
  constructor(key: [Text], value: MacroPropValue[]) {
    super('macroProp')
    this.key = key[0]?.value
    this.value = value

    if (!this.key) {
      const errorMsg = "ERROR while trying to parse macro prop key."
      console.error(errorMsg, this)
      this.key = errorMsg
    }
  }
}

export type MacroPropValue = Macro | List | Text

export class List extends MacroAstNode_Base<'list'> {
  items: ListItem[]
  constructor(items: ListItem[]) {
    super('list')
    this.items = items
  }
}

export type ListItem = (Macro | Text)[]
