import { getReverseWords } from "../index.js";

const test1 = () => {
  console.log(
    "\ngetReverseWords function should return an empty string if the text is empty"
  );

  const expectedReversedWords = "";
  const text = "";
  const reversedWords = getReverseWords(text);

  if (reversedWords === expectedReversedWords) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = () => {
  console.log(
    "\ngetReverseWords function should return 'solpmeje sol nabaca eS'"
  );

  const expectedReversedWords = "solpmeje sol nabaca eS";
  const text = "Se acaban los ejemplos";
  const reversedWords = getReverseWords(text);

  if (reversedWords === expectedReversedWords) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
