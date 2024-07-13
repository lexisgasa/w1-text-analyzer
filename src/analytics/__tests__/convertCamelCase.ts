import { convertCamelCase } from "../index.js";

const test1 = () => {
  console.log(
    "\nconvertCamelCase function should return and empty string if an empty text is given"
  );

  const text = "";
  const convertedText = convertCamelCase(text);
  const expectedConvertedText = "";

  if (convertedText === expectedConvertedText) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = () => {
  console.log("\nconvertCamelCase function should return 'Ya Queda Menos'");

  const text = "ya queda menos";
  const convertedText = convertCamelCase(text);
  const expectedConvertedText = "Ya Queda Menos";

  if (convertedText === expectedConvertedText) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
