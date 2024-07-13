import { getWordsList } from "../index.js";

const test1 = () => {
  console.log(
    "\ngetWordsList function should return and empty string if an empty string is given"
  );

  const list = [""];
  const wordList = getWordsList(list);
  const expectedWordList = "";

  if (wordList === expectedWordList) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = () => {
  console.log(
    "\ngetWordsList function should return 'Voy,bastante,apurado,pero,de,todo,se,sale'"
  );

  const list = [
    "Voy",
    "bastante",
    "apurado",
    "pero",
    "de",
    "todo",
    "se",
    "sale",
  ];
  const wordList = getWordsList(list);
  const expectedWordList = "Voy,bastante,apurado,pero,de,todo,se,sale";

  if (wordList === expectedWordList) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
