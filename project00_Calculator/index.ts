import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "num1" },
  { message: "Enter your second number", type: "number", name: "num2" },
  {
    message: "Select one of operator to perform action ",
    type: "list",
    name: "operator",
    choices: ["+", "-", "*", "/"],
  },

]);


  // conditional statement
if (answer.operator === '+') {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === '-') {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === '*') {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === '/') {
    console.log(answer.num1 / answer.num2);
}
else{"Please select valid operator"}





