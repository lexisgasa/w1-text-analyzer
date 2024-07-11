export const countParagraphs = (text: string): number => {
  const paragraphCount = text
    .split(/\n\s*/)
    .filter((paragraphs) => paragraphs.trim().length > 0).length;

  return paragraphCount;
};

export const countWords = (text: string): number => {
  // Hay que arreglar, ya que "Hola " devuelve 2 palabras
  if (text) {
    return text.split(" ").length;
  } else {
    return 0;
  }
};
