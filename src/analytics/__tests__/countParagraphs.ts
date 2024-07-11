import { countParagraphs } from "../index.js";

const test1 = (): void => {
  console.log("\ncountParagraphs should return 0 if no paragraph is given");

  const text = "";
  const paragraphsCount = countParagraphs(text);
  const expectedParagraphsCount = 0;

  if (paragraphsCount === expectedParagraphsCount) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

const test2 = (): void => {
  console.log("\ncountParagraphs should return 1 if just a paragraph is given");

  const text = "Esto es un párrafo";
  const paragraphsCount = countParagraphs(text);
  const expectedParagraphsCount = 1;

  if (paragraphsCount === expectedParagraphsCount) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

const test3 = (): void => {
  console.log(
    "\ncountParagraphs should return the same amount of given paragraphs"
  );

  const text = `Esto es un párrafo
  
  Este es el segundo párrafo
  
  Este es el tercer párrafo
  `;
  const paragraphsCount = countParagraphs(text);
  const expectedParagraphsCount = 3;

  if (paragraphsCount === expectedParagraphsCount) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
};

test1();
test2();
test3();
