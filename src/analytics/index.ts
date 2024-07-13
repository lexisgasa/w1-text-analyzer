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

export const getWordsList = (wordList: string): string => {
  if (wordList.length === 0) {
    return "";
  }

  return wordList.split(" ").join(",");
};

export const getPalindrome = (text: string): string => {
  const words = text.split(" ");

  const palindromes = words.filter((word) => {
    const reverseWord = word.split("").reverse().join("");
    return reverseWord.toLowerCase() === word.toLowerCase();
  });

  return palindromes.join(", ");
};

export const getFrequency = (text: string, targetWord: string): number => {
  const words = text.split(" ");
  let count = 0;

  words.forEach((word) => (word === targetWord ? count++ : 0));

  return count;
};

export const getReverseWords = (text: string): string => {
  return text.split("").reverse().join("");
};

export const getReverseText = (text: string): string => {
  return text.split(" ").reverse().join(" ");
};
