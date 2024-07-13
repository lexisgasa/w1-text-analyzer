import { convertKebabCase } from "../index.js";

const test1 = () => {
  console.log(
    "\nconvertKebabCase function should return and empty string if an empty text is given"
  );

  const text = "";
  const convertedText = convertKebabCase(text);
  const expectedConvertedText = "";

  if (convertedText === expectedConvertedText) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = () => {
  console.log("\nconvertKebabCase function should return 'Ya-casi-está'");

  const text = "Ya casi está";
  const convertedText = convertKebabCase(text);
  const expectedConvertedText = "Ya-casi-está";

  if (convertedText === expectedConvertedText) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
