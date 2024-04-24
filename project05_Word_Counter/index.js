#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the word: "
    },
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence has ${words.length} words`);
