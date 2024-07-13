import { countShortWords } from "../index.js";

const test1 = (): void => {
  console.log(
    "\ncountShortWords function should 0 if an empty string is given"
  );

  const expectedShortWordsCount = 0;
  const text = "";
  const shortWordsCount = countShortWords(text);

  if (shortWordsCount === expectedShortWordsCount) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = (): void => {
  console.log("\ncountShortWords function should return 6");

  const expectedShortWordsCount = 6;
  const text = "Mochi le ladra a todo lo que se mueve";
  const shortWordsCount = countShortWords(text);

  if (shortWordsCount === expectedShortWordsCount) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
