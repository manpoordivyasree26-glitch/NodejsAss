import boxen from "boxen";

const title = "Hurray!!!";
const message = "I am using my first external module!";

// 1. Classic (default)
const classicBox = boxen(`${title}\n\n${message}`, {
  padding: 1,
  margin: 1
});
console.log(classicBox);

// 2. SingleDouble style
const singleDoubleBox = boxen(`${title}\n\n${message}`, {
  padding: 1,
  margin: 1,
  borderStyle: "singleDouble"
});
console.log(singleDoubleBox);

// 3. Round style
const roundBox = boxen(`${title}\n\n${message}`, {
  padding: 1,
  margin: 1,
  borderStyle: "round"
});
console.log(roundBox);
