export interface PostProcessInfo {
  headings: { [name: string]: { level: number; page: number } }
}

export const getPostProcessInfo = (content: string): PostProcessInfo => {
  const getHeadingLevel = (line: string) => /^#+/.exec(line)?.[0].length!

  type PageCounter = {
    curPage: number
    lines: { line: string; page: number }[]
  }
  const headings = Object.fromEntries(
    content
      .split('\n')
      .reduce<PageCounter>(
        (acc, cur, i) => {
          return {
            curPage:
              cur.search(/\\page/) === -1 ? acc.curPage : acc.curPage + 1,
            lines: [
              ...acc.lines,
              {
                line: cur,
                page:
                  cur.search(/\\page/) === -1 ? acc.curPage : acc.curPage + 1,
              },
            ],
          }
        },
        { curPage: 1, lines: [] }
      )
      .lines.filter(({ line }) => line.startsWith('#'))
      .map(({ line, page }) => [
        line.slice(getHeadingLevel(line) + 1).replace(/ \(\d+ MP\)/, ''),
        { level: getHeadingLevel(line), page },
      ])
  )

  return {
    headings,
  }
}

export const postProcess = (content: string, info: PostProcessInfo) => {
  const getLinkName = (link: string) =>
    /\[\[(?<FilePath>(?:\w+\/)*)(?<SuperTitulo>.*#)?(?<Section>.+)\]\]/.exec(
      link
    )?.groups?.Section ?? link

  return content.replaceAll(/\[\[.+\]\]/g, subs => {
    return `[${getLinkName(subs)}](#p${info.headings[getLinkName(subs)]?.page})`
  })
}