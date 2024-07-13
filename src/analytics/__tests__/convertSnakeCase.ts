import { convertSnakeCase } from "../index.js";

const test1 = () => {
  console.log(
    "\nconvertSnakeCase function should return and empty string if an empty text is given"
  );

  const text = "";
  const convertedText = convertSnakeCase(text);
  const expectedConvertedText = "";

  if (convertedText === expectedConvertedText) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = () => {
  console.log("\nconvertSnakeCase function should return 'Ahora_sí_que_sí'");

  const text = "Ahora sí que sí";
  const convertedText = convertSnakeCase(text);
  const expectedConvertedText = "Ahora_sí_que_sí";

  if (convertedText === expectedConvertedText) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
