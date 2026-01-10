import boxen from "boxen";

const title = "Hurray!!!";
const message = "I am using my first external module!";

// 1. Classic Style (Default Single Line)
console.log(
  boxen(message, {
    title,
    padding: 1,
    margin: 1,
    borderStyle: "single"
  })
);

// 2. SingleDouble Style
console.log(
  boxen(message, {
    title,
    padding: 1,
    margin: 1,
    borderStyle: "singleDouble"
  })
);

// 3. Round Style
console.log(
  boxen(message, {
    title,
    padding: 1,
    margin: 1,
    borderStyle: "round"
  })
);
