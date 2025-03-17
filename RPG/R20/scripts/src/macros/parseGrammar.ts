import { grammar as makeGrammar } from 'ohm-js'
import { readFile } from '../file'

const loadGrammar = async () => {
  const grammarFileName = 'src/macros/macroGrammar.ohm'
  const grammarContent = await readFile(grammarFileName)
  const grammar = makeGrammar(grammarContent)

  const semantics = grammar.createSemantics().addOperation("compileText", {
    // textWithMacro: (a) => { return a.compileText() },
    // textWithMacro: (a) => { return a.children.map(child => child.compileText()).join("") },
    // textWithMacro: (a) => { return a.children.map(child => child.compileText()).join("") },
    nonMacroText: (a) => "", // `${a.sourceString}`,
    macro: (a,s,d,f,g,h) => `Macro: ${s.sourceString}\n`,
    // macroName: (a) => a.sourceString,
    // macroBody: (a) => ``,
    // macroBodyText: (a) => ``,
    // notSingle: (a) => ``,
    notDouble: (b,a) => `${b.sourceString}${a.sourceString}`,
    macroProp: (a,v,b) => ``,
    macroPropKey: (a,s,d) => ``,
    macroPropValue: (a) => ``,
    macroPropValueItem: (a) => ``,
    macroPropValueText: (a,b) => ``,
    unorderedList: (a) => ``,
    unorderedListItem: (a,s,d,f) => ``,
    unorderedListItemValue: (a) => ``,
    unorderedListItemText: (a,s) => ``,
    validIdentifier: (a) => ``,
    nlSpaced: (a,s,b) => ``,
    spacedList: (a) => ``,
    _iter: (...children) => children.map(child => child.compileText()).join(""),
    _terminal: () => "a",
  })


  return {grammar, semantics}
}

const macroGrammar = loadGrammar()

export const parseTextForMacros = (content: string) => macroGrammar
  .then(({grammar, semantics}) => semantics(grammar.match(content)).compileText())
  .then(a => console.log(a))
  // .then(a => console.log(Object.keys(a)))
  .then(a => content)
