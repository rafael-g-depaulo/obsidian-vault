import { grammar as makeGrammar, Node, TerminalNode } from 'ohm-js'
import { readFile } from '../file'

type MacroAST = MacroAstNode[]

type MacroAstNode = Text | Macro | MacroBody | MacroProp | List
interface MacroAstNode_Base {
  type: string
}

interface Text extends MacroAstNode_Base {
  type: 'text'
  value: string
}
interface Macro extends MacroAstNode_Base {
  name: string
  body: MacroBody
  type: 'macro'
}

interface MacroBody extends MacroAstNode_Base {
  type: 'body'
  content: MacroBodyItem[]
}
type MacroBodyItem = Text | Macro | MacroProp
interface MacroProp extends MacroAstNode_Base {
  type: 'prop'
  key: string
  value: MacroPropValue[]
}
type MacroPropValue = Macro | List | Text
interface List extends MacroAstNode_Base {
  type: 'list'
  items: ListItem[]
}
type ListItem = (Macro | Text)[]

const textNode = (content: string): Text => ({ type: 'text', value: content })
const macroNode = (macroName: string, macroBody: Node): Macro => ({
  type: 'macro',
  name: macroName,
  body: macroBody.parseAST(),
})

const groupText = (nodes: MacroAstNode[]) =>
  nodes.reduce<MacroAstNode[]>((acc, cur) => {
    const lastNode = acc.at(-1)
    return lastNode?.type === "text" && cur.type === "text"
      ? [...acc.slice(0, -1), textNode(`${lastNode.value}${cur.value}`)]
      : [...acc, cur]
  }, [])

const loadGrammar = async () => {
  const grammarFileName = 'src/macros/macroGrammar.ohm'
  const grammarContent = await readFile(grammarFileName)
  const grammar = makeGrammar(grammarContent)

  const semantics = grammar
    .createSemantics()
    .addOperation<MacroAST>('parseAST', {
      // textWithMacro: (a) => { return a.compileText() },
      // textWithMacro: (a) => { return a.children.map(child => child.compileText()).join("") },
      // textWithMacro: (a) => { return a.children.map(child => child.compileText()).join("") },
      // nonMacroText: a => [textNode('@@@@@')], // `${a.sourceString}`,
      macro: (_open, macroName, _space_1, macroBody, _space_2, _close) => [
        macroNode(macroName.sourceString, macroBody),
      ],
      // macroName: (a) => a.sourceString,
      macroBody: (bodyItems) => {
        const content = bodyItems.asIteration().parseAST()
        // console.log("!!", content)
        return [({ type: "body", content })]
      },
      // macroBodyText: (a) => ``,
      // notSingle: (a) => ``,
      // notDouble: (b, a) => [`${b.sourceString}${a.sourceString}`],
      macroProp: (a, v, b) => [textNode('macroProp')],
      // macroPropKey: (a,s,d) => ``,
      // macroPropValue: (a) => ``,
      // macroPropValueItem: (a) => ``,
      // macroPropValueText: (a,b) => ``,
      // unorderedList: (a) => ``,
      // unorderedListItem: (a,s,d,f) => ``,
      // unorderedListItemValue: (a) => ``,
      // unorderedListItemText: (a,s) => ``,
      // validIdentifier: (a) => ``,
      // nlSpaced: (a, s, b) => ``,
      // spacedList: (a) => ``,
      _iter: (...children) => {
        // console.log("|||", children.map(c => c.sourceString))
        return groupText(children.flatMap(child => child.parseAST()))
      },
      _nonterminal(...children) {
        return groupText(children.flatMap(child => child.parseAST()))
      },
      _terminal() {
        return [textNode(`${this.sourceString}`)]
      },
    })

  return { grammar, semantics }
}

const macroGrammar = loadGrammar()

export const parseTextForMacros = (content: string) =>
  macroGrammar
    .then(({ grammar, semantics }) =>
      semantics(grammar.match(content)).parseAST()
    )
    // .then(ast => printMacroAST(ast))
    .then(a => console.log(a))
    // .then(a => console.log(Object.keys(a)))
    .then(a => content)
