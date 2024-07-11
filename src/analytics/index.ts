export const countParagraphs = (text: string): number => {
  const paragraphCount = text
    .split(/\n\s*/)
    .filter((paragraphs) => paragraphs.trim().length > 0).length;

  return paragraphCount;
};
