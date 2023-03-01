export const removeComments = (content: string) =>
  content.replace(/\%\%[^\%]*\%\%/gm, '')
