import { countParagraphs } from "../index.js";

const test1 = (): void => {
  console.log("countParagraphs function");

  const text = "Esto es un párrafo";
  const paragraphsCount = countParagraphs(text);
  const expectedParagraphsCount = 1;

  if (paragraphsCount === expectedParagraphsCount) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

test1();
