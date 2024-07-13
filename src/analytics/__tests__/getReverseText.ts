import { getReverseText } from "../index.js";

const test1 = () => {
  console.log(
    "\ngetReverseText function should return an empty string if the text is empty"
  );

  const expectedReversedText = "";
  const text = "";
  const reversedText = getReverseText(text);

  if (reversedText === expectedReversedText) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = () => {
  console.log(
    "\ngetReverseText function should return 'ejemplos los acaban Se'"
  );

  const expectedReversedText = "ejemplos los acaban Se";
  const text = "Se acaban los ejemplos";
  const reversedText = getReverseText(text);

  if (reversedText === expectedReversedText) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
