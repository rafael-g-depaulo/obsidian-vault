import { grammar as makeGrammar, Node, TerminalNode } from 'ohm-js'
import { readFile } from '../file'
import {
  Macro,
  MacroAST,
  MacroAstNode,
  MacroBody,
  MacroBodyItem,
  MacroProp,
  Table,
  TableRow,
  Text,
} from './macroAst'

const groupText = (nodes: MacroAstNode[]) =>
  nodes.reduce<MacroAstNode[]>((acc, cur) => {
    const lastNode = acc.at(-1)
    return lastNode?.type === 'text' && cur.type === 'text'
      ? [...acc.slice(0, -1), new Text(`${lastNode.baseStr}${cur.baseStr}`)]
      : [...acc, cur]
  }, [])

const clean = (a: any) => ({
  ...a,
  _baseInterval: '',
  source: a?.source?.sourceString?.slice(0, 20),
})

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
      macro(_open, macroName, macroBody, _space, _close) {
        return [
          new Macro(
            macroName.sourceString,
            macroBody.parseAST()[0] ?? [],
            this
          ),
        ]
      },
      // macroName: (a) => a.sourceString,
      macroBody(bodyItems) {
        const content = bodyItems.asIteration().parseAST() ?? []
        return [new MacroBody(content, this)]
      },
      // nonemptyListOf: (firstNode, restList, restList2) => []
      // macroBodyText: (a) => ``,
      // notSingle: (a) => ``,
      // notDouble: (b, a) => [`${b.sourceString}${a.sourceString}`],
      macroProp(key, _space_1, value, _space_2) {
        // console.log(clean(value.children[0]), "zzzzzzzzz")
        return [
          new MacroProp(key.parseAST(), value.asIteration().parseAST(), this),
        ]
      },
      macroPropKey(_newline_spaced, key, _space, _colon) {
        return [new Text(key.sourceString)]
      },
      macroPropValue: a => [],
      // macroPropValueItem: (a) => ``,
      // macroPropValueText: (a,b) => ``,
      unorderedList: a => [],
      // unorderedListItem: (a,s,d,f) => ``,
      // unorderedListItemValue: (a) => ``,
      // unorderedListItemText: (a,s) => ``,
      // validIdentifier: (a) => ``,
      // nlSpaced: (a, s, b) => ``,
      // spacedList: (a) => ``,

      tableRow(_sep, _space_1, cellValues, _space_2, _sep_2) {
        return [

          new TableRow(
            cellValues.children.map(c => c.parseAST()),
            this
          ),
        ]
      },
      // tableRow: (_sep, _space_1, cellValues, _space_2, _sep_2) => cellValues.asIteration().children.map(cellValue => cellValue.parseAST()),
      mdTable(headerRow, _nl, _sepRow, _nl_2, tableRows) {
        // const row = headerRow.parseAST()
        return [new Table(headerRow.parseAST()[0], tableRows.children.flatMap(row => row.parseAST()), this)]
      },
      // tableHeaderSeparator: (_sep_1, _space_1, _colon_1, _space_2, _hyphen, _space_3, _colon_2, _space_4, _sep, _space_5) => [],
      // cellValue(values) {
      //   console.log(values.children.map(clean))
      //   return []
      // },
      _iter: (...children) => {
        // console.log("|||", children.map(c => c.sourceString))
        return groupText(children.flatMap(child => child.parseAST()))
      },
      _nonterminal(...children) {
        return groupText(children.flatMap(child => child.parseAST()))
      },
      _terminal() {
        return [new Text(this.sourceString)]
        // return [new Text('')]
      },
    })

  const parse = (content: string): MacroAST =>
    semantics(grammar.match(content)).parseAST()

  return { grammar, semantics, parse }
}

const macroGrammar = loadGrammar()

export const parseTextForMacros = (content: string) =>
  macroGrammar
    .then(({ parse }) => parse(content))
    // .then(ast => printMacroAST(ast))
    // .then(a => console.log(Object.keys(a)))
    // .then(a => (console.log(a), a))
    .then(a => a.map(node => node.compile()).join(''))
    // .then(a => {
    // console.clear()
    // console.log('-----------------------------------')
    // console.log(a)
    // })
    // .then(() => console.log(dic))
    .then(a => content)
