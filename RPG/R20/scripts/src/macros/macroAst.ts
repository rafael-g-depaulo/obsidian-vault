import { Node } from 'ohm-js'
import { macroHandler } from './executeMacros'

export type MacroAST = MacroAstNode[]

export type MacroAstNode =
  | Text
  | Macro
  | MacroBody
  | MacroProp
  | List
  | Table
  | TableRow

class MacroAstNode_Base<NodeName extends string> {
  type: NodeName

  _node: Node | null
  get baseStr() {
    return this._node?.sourceString ?? 'ERROR in Text Node in AST'
  }

  constructor(type: NodeName, _node: Node | null) {
    this.type = type
    this._node = _node
  }

  compile(): string {
    return `Not implemented compile method for ${this.type}`
  }
}

export class Text extends MacroAstNode_Base<'text'> {
  text: string
  constructor(text: string) {
    super('text', null)
    this.text = text
  }

  get baseStr() {
    return this.text
  }

  compile(): string {
    return this.baseStr
    return '|text| '
  }
}

export class Macro extends MacroAstNode_Base<'macro'> {
  name: string
  body: MacroBody

  constructor(name: string, body: MacroBody, _node: Node) {
    super('macro', _node)
    this.name = name
    this.body = body
  }

  compile() {
    const bodyContent = this.body.content

    if (!bodyContent) {
      // console.error("SADFSDFSDFSDF", this)
      return ''
    }
    // const asdasd = bodyContent
    //   .filter(a => a.type === "macroProp")
    //   .map(a => a.compile())

    const test = bodyContent
      .map(bodyItem =>
        bodyItem.type === 'text'
          ? bodyItem.baseStr
          : bodyItem._node?.sourceString
      )
      .join('\n\n- sep -\n\n')

    // console.clear()
    console.log('----------')
    console.log(bodyContent.map(({_node, ...r}) => (r)))

    // console.log(asdasd)
    return macroHandler(this.name, this.body, {
      allSpells: [],
      archetypes: [],
      classesFolder: '',
      currentFolder: '',
      archetypesFolder: '',
      classThemes: {},
    })
    return `Macro: ${this.name}\n`
  }
}

export class MacroBody extends MacroAstNode_Base<'macroBody'> {
  content: MacroBodyItem[]
  constructor(content: MacroBodyItem[], _node: Node) {
    super('macroBody', _node)
    this.content = content
  }
}

export type MacroBodyItem = Text | Macro | MacroProp

export class MacroProp extends MacroAstNode_Base<'macroProp'> {
  key: string
  value: MacroPropValue[]
  constructor(key: [Text], value: MacroPropValue[], _node: Node) {
    super('macroProp', _node)
    this.key = key[0].baseStr
    this.value = value

    if (!this.key) {
      const errorMsg = 'ERROR while trying to parse macro prop key.'
      console.error(errorMsg, this)
      this.key = errorMsg
    }
  }
}

export type MacroPropValue = Macro | List | Text | Table

export class List extends MacroAstNode_Base<'list'> {
  items: ListItem[]
  constructor(items: ListItem[], _node: Node) {
    super('list', _node)
    this.items = items
  }
}

export type ListItem = (Macro | Text)[]

export class Table extends MacroAstNode_Base<'table'> {
  data: ({[key: string]: string})[]

  constructor(headerRow: TableRow, data: TableRow[], _node: Node) {
    super('table', _node)

    const headerValues = headerRow.rowData.map(cell => cell.reduce((acc, cur) => `${acc}${cur.compile()}`,""))
    this.data = data.map(row => row.rowData.reduce((acc, cell, index) => ({
      ...acc,
      [headerValues[index]]: cell.map(cellValue => cellValue.compile()).join(""),
    }), {}))
  }

  compile() {
    return this._node?.sourceString ?? ""
  }
}

type TableCellValue = MacroAstNode[]
export class TableRow extends MacroAstNode_Base<'table_row'> {
  rowData: TableCellValue[]
  constructor(dataNodes: TableCellValue[], _node: Node) {
    super('table_row', _node)
    this.rowData = dataNodes
    
    this.rowData.forEach(cell =>
      cell.forEach(cellValue =>
        cellValue.type === 'text' &&
        (cellValue.text = cellValue.text.trim())
      )
    )
  }
}
