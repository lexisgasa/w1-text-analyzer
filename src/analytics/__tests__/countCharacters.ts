import { countCharacters } from "../index.js";

const test1 = () => {
  console.log(
    "\ncountCharacters function should return 0 if an empty string is given"
  );

  const expectedWordsCount = 0;
  const text = "";
  const wordsCount = countCharacters(text);

  if (wordsCount == expectedWordsCount) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = () => {
  console.log("\ncountCharacters function should return 9 characters");

  const expectedWordsCount = 9;
  const text = "Hola mundo";
  const wordsCount = countCharacters(text);

  if (wordsCount == expectedWordsCount) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
