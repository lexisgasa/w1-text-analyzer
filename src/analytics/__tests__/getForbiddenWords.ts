import { getForbiddenWords } from "../index.js";

const test1 = () => {
  console.log(
    "\n getForbiddenWords should return an empty string if the text is empty"
  );

  const expectedForbiddenString = "";
  const forbiddenWords = ["mierda"];
  const text = "";
  const forbiddenString = getForbiddenWords(text, forbiddenWords);

  if (forbiddenString === expectedForbiddenString) {
    console.log("Test passes");
  } else {
    console.log("Tes fails");
  }
};

const test2 = () => {
  console.log(
    "\n getForbiddenWords should return 'Hay una ****** atrancada en el váter'"
  );

  const expectedForbiddenString = "Hay una ****** atrancada en el váter";
  const forbiddenWords = ["mierda"];
  const text = "Hay una mierda atrancada en el váter";
  const forbiddenString = getForbiddenWords(text, forbiddenWords);

  if (forbiddenString === expectedForbiddenString) {
    console.log("Test passes");
  } else {
    console.log("Tes fails");
  }
};

test1();
test2();
