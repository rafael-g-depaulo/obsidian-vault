import { grammar as makeGrammar, Node, TerminalNode } from 'ohm-js'
import { readFile } from '../file'
import {
  Macro,
  MacroAST,
  MacroAstNode,
  MacroBody,
  MacroBodyItem,
  MacroProp,
  Text,
} from './macroAst'

const groupText = (nodes: MacroAstNode[]) =>
  nodes.reduce<MacroAstNode[]>((acc, cur) => {
    const lastNode = acc.at(-1)
    return lastNode?.type === 'text' && cur.type === 'text'
      ? [...acc.slice(0, -1), new Text(`${lastNode.value}${cur.value}`)]
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
      macro: (_open, macroName, _space_1, macroBody, _space_2, _close) => [
        new Macro(macroName.sourceString, macroBody.parseAST()[0]),
      ],
      // macroName: (a) => a.sourceString,
      macroBody: bodyItems => {
        const content =
          bodyItems.asIteration().parseAST() ?? ([]satisfies MacroBodyItem[])
        return [new MacroBody(content)]
      },
      // nonemptyListOf: (firstNode, restList, restList2) => []
      // macroBodyText: (a) => ``,
      // notSingle: (a) => ``,
      // notDouble: (b, a) => [`${b.sourceString}${a.sourceString}`],
      macroProp: (key, _sep, value) => {
        // console.log(clean(value.children[0]), "zzzzzzzzz")
        return [new MacroProp(key.parseAST(), value.asIteration().parseAST())]
      },
      macroPropKey: (key, _space, _colon) => [new Text(key.sourceString)],
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
      _iter: (...children) => {
        // console.log("|||", children.map(c => c.sourceString))
        return groupText(children.flatMap(child => child.parseAST()))
      },
      _nonterminal(...children) {
        return groupText(children.flatMap(child => child.parseAST()))
      },
      _terminal() {
        return [new Text(this.sourceString)]
        return [new Text('')]
      },
    })

  const parse = (content: string): MacroAST => semantics(grammar.match(content)).parseAST()

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
    .then(a => {
      console.log('-----------------------------------')
      console.log(a)
    })
    // .then(() => console.log(dic))
    .then(a => content)
