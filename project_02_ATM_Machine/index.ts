#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 3244;

let y = await inquirer.prompt([{
    name: "pin",
    type: "number",
    message: "Enter your pin",

}])

if(y.pin == myPin) {
    console.log("Correct PIN !")

    let operation_ans = await inquirer.prompt
 (   [   {
        name: "operation",
        message: "Please select operation",
        type: "list",
        choices: ["Withdraw", "Check Balance"]
         } 
      ]
  );

  console.log(operation_ans);

  if(operation_ans.operation === "Withdraw") {

    let amountAns = await inquirer.prompt([{
        name: "amount",
        message: "Enter amount",
        type: "number"

    }])
        myBalance -= amountAns.amount
        console.log("Your remaining balance is ", myBalance)
  
    } else if(operation_ans.operation === "Check Balance") {
        console.log("Your balance is ", myBalance)
    }
    }








else{
    console.log("Wrong PIN !")

}