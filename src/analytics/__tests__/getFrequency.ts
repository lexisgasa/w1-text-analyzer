import { getFrequency } from "../index.js";

const test1 = () => {
  console.log(
    "\ngetFrenquency function should return 0 if the word 'salchicha' doesn't appear in the text"
  );

  const expectedFrequency = 0;
  const text = "El 'hola mundo' es clave aprendiendo un lenguaje nuevo";
  const word = "salchicha";
  const frequency = getFrequency(text, word);

  if (frequency === expectedFrequency) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = () => {
  console.log(
    "\ngetFrenquency function should return 0 if the word 'salchicha' doesn't appear in the text"
  );

  const expectedFrequency = 2;
  const text =
    "Si un perro salchicha se come una salchicha se consideraría canibalismo?";
  const word = "salchicha";
  const frequency = getFrequency(text, word);

  if (frequency === expectedFrequency) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
