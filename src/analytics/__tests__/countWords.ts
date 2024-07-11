import { countWords } from "../index.js";

const test1 = () => {
  console.log("\nShould return 0 if any word is provided");

  const text = "";
  const expectedNumber = 0;

  if (countWords(text) === expectedNumber) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

const test2 = () => {
  console.log("\nShould return the same number of letters");

  const text = "Soy un bebedeveloper";
  const expectedNumber = 3;

  if (countWords(text) === expectedNumber) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

test1();
test2();
