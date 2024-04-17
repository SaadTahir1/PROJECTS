#! /usr/bin/env node

import inquirer from "inquirer";

let Todos = []
let Condition = true;

while(Condition){
    let todosquestions = await inquirer.prompt([
    {
        name: 'QuestionOne',
        type: 'input',
        message: 'What would you like to add in your todos ?',
        validate: (input: any) => {
            // Validate that input is not empty
            if (input.trim() !== '') {
                return true;
            }
            return "Please enter a todo item.";
        }
    },

    
    {
        name: 'Question2',
        type: 'confirm',
        message: 'Do you want to add more todos ?',
        default: true,
    },
]);

Todos.push(todosquestions.QuestionOne) ;
console.log(Todos) ;
Condition = todosquestions.Question2;


}




