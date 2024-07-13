import { getPalindrome } from "../index.js";

const test1 = (): void => {
  console.log(
    "\n getPalindrome function should return and empty string if there aren't palindromes"
  );

  const text = "";
  const palindromes = getPalindrome(text);
  const expectedPalindromes = "";

  if (palindromes === expectedPalindromes) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

const test2 = (): void => {
  console.log(
    "\n getPalindrome function should return and empty string if there aren't palindromes"
  );

  const text = "Ana tiene un racecar";
  const palindromes = getPalindrome(text);
  const expectedPalindromes = "Ana, racecar";

  if (palindromes === expectedPalindromes) {
    console.log("Test passes");
  } else {
    console.log("Test fails");
  }
};

test1();
test2();
