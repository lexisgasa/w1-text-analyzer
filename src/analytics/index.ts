export const countParagraphs = (text: string): number => {
  const paragraphCount = text
    .split(/\n\s*/)
    .filter((paragraphs) => paragraphs.trim().length > 0).length;

  return paragraphCount;
};

export const countWords = (text: string): number => {
  if (!text) {
    return 0;
  }

  return text.trim().split(" ").length;
};

export const countCharacters = (text: string): number => {
  if (!text) {
    return 0;
  }

  return text.replace(/\s/, "").length;
};

export const countShortWords = (
  text: string,
  maxLength: number = 4
): number => {
  if (!text) {
    return 0;
  }

  return text.split(" ").filter((word) => word.length <= maxLength).length;
};
