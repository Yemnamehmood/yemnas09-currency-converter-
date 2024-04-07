#! /usr/bin/env node
import inquirer from "inquirer"


// Making Currency Converter Application 

let currency: any = {
    USD: 1,     // United States Dollar 
    EUR: 0.91,  // Euro 
    GBP: 0.76,  // Great British Pound 
    PKR: 280,   // Pakistani Currency
    JPY: 74.57, // Japanese Yen
    AUD: 1.32,  // Australian Dollar
    CAD: 1.26,  // Canadian Dollar
    CNY: 6.46   // Chinese Yuan
};

async function main() {
    console.log("Welcome to Currency Converter!");

    let useranswer = await inquirer.prompt([
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "PKR", "JPY", "AUD", "CAD", "CNY"]
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "PKR", "JPY", "AUD", "CAD", "CNY"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
    ]);
    //Dynamic Approach 

    let fromAmount = currency[useranswer.from];
    let toAmount = currency[useranswer.to];
    let amount = useranswer.amount;
    let baseAmount = amount / fromAmount; //base amount
    let convertedamount = baseAmount * toAmount;
    console.log(`Converted amount: ${convertedamount}`);
}

// Call the main function
main().catch(error => {
    console.error('Error:', error);
});
