export const insertSummary = (content: string) => {

  const headings = content
    .split('\n')
    .filter(line => line[0] === '#')

  console.log(headings)
  return content
}
