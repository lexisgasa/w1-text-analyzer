export const countParagraphs = (text: string): number => {
  const paragraphs = text.split(/\n\s*/).length;
  return paragraphs;
};
