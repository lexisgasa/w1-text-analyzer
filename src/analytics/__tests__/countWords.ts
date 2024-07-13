import { countWords } from "../index.js";

const test1 = (): void => {
  console.log(
    "\ncountWords function should return 0 if an empty string is provided"
  );

  const text = "";
  const expectedWordsCount = 0;

  if (countWords(text) === expectedWordsCount) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

const test2 = (): void => {
  console.log("\ncountWords function should return 3");

  const text = "Soy un bebeloper";
  const expectedWordsCount = 3;

  if (countWords(text) === expectedWordsCount) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

test1();
test2();
