const input = document.querySelector("input");
const pElements = document.querySelectorAll("p");
const validationPopup = document.querySelector(".validation_popup");

const CAPITAL_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SPECIAL_CHARS = ["*", "@", "#", "$"];

input.addEventListener("focus", () => {
  validationPopup.style.display = "initial";
});

let timeoutId;
input.addEventListener("blur", () => {
  timeoutId = setTimeout(() => {
    validationPopup.style.display = "none";
  }, 200);
});

validationPopup.addEventListener("click", () => {
  clearTimeout(timeoutId);
  input.focus();
});

input.addEventListener("keyup", (e) => {
  let inputVal = e.target.value;
  let hasOneLetter = hasArray([...LETTERS, ...CAPITAL_LETTERS], inputVal);
  let hasOneCapitalLetter = hasArray(CAPITAL_LETTERS, inputVal);
  let hasSpecialChar = hasArray(SPECIAL_CHARS, inputVal);
  let hasOneNumber = hasArray(NUMBERS, inputVal);
  let hasEightChar = inputVal.length >= 8;
  pElements[0].style.color = hasOneLetter ? "green" : "red";
  pElements[1].style.color = hasOneCapitalLetter ? "green" : "red";
  pElements[2].style.color = hasOneNumber ? "green" : "red";
  pElements[3].style.color = hasEightChar ? "green" : "red";
  pElements[4].style.color = hasSpecialChar ? "green" : "red";
});
function hasArray(array, val) {
  return array.some((char) => {
    return val.includes(char);
  });
}
