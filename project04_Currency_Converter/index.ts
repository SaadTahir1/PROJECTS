#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.redBright("\nWelcome to Currency Converter\n"))
console.log(chalk.yellowBright("\t ------\t\n"))
console.log(chalk.blueBright("This is a simple currency converter\n"))

let currencies: any = {
    USD: 1,
    GBP: 0.80,
    EUR: 0.94,
    INR: 83.58,
    PKR: 278.16,

}

let answer = await inquirer.prompt( [
    {

    name: 'CurrencyFrom',
    message: 'Enter the currency you want to convert from: ',
    type: 'list',
    choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
  
    },

    {
        
        name: 'CurrencyTo',
        message: 'Enter the currency you want to convert to: ',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
      
    },
    
    {
       name: 'Amount',
       message: 'Enter the amount: ',
       type: 'number' 
    }
]
);

let fromAmount = currencies[answer.CurrencyFrom] ;``
let toAmount = currencies[answer.CurrencyTo] ;
let amount = answer.Amount;  
let baseAmount = amount / fromAmount
let result = baseAmount * toAmount
console.log(result)


