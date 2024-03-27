#! /usr/bin/env node

import inquirer from "inquirer" ;

console.log(" Guess a number between 1 to 8 ") ;

let x:number = Math.floor(Math.random() * 7)
while(true) {
    let input = await inquirer.prompt(
        {name: "guess",type: "number", 
        message:"Enter your guess number you want between 1 to 8: "}
    )

    let ans: number= input.guess
    if(ans ==x) {
        console.log("Congratulations! your guess is right")
        break;
    }
    else {console.log("your guess is wrong try again!!")}
}
