#!/usr/bin/env node
import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";
import { square } from "./square.js";
import { sqroot } from "./sqroot.js";
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: chalk.greenBright("Enter first number")
    },
    {
        name: "operator",
        type: "list",
        choices: ["Add +", "Subtract -", "Multiply *", "Divide /", "Square **", "Square Root ***"],
        message: chalk.blueBright("Enter required operator")
    },
]);
if (answer.operator === "Square **") {
    let sqresult = square(answer.num1);
    console.log(chalk.yellowBright(`The square of ${answer.num1} is ${sqresult}`));
}
else if (answer.operator === "Square Root ***") {
    let sqrootresult = sqroot(answer.num1);
    console.log(chalk.magentaBright(`The square root of ${answer.num1} is ${sqrootresult}`));
}
else {
    let answer2 = await inquirer.prompt([
        {
            name: "num2",
            type: "number",
            message: chalk.greenBright("Enter second number")
        }
    ]);
    if (answer.operator === "Add +") {
        let addresult = add(answer.num1, answer2.num2);
        console.log(chalk.yellow(`The answer by adding ${answer.num1} and ${answer2.num2} is ${addresult}`));
    }
    else if (answer.operator === "Subtract -") {
        let subresult = subtract(answer.num1, answer2.num2);
        console.log(chalk.green(`The answer by subtracting ${answer.num1} and ${answer2.num2} is ${subresult}`));
    }
    else if (answer.operator === "Multiply *") {
        let multiresult = multiply(answer.num1, answer2.num2);
        console.log(chalk.magenta(`The answer by multiplying ${answer.num1} and ${answer2.num2} is ${multiresult}`));
    }
    else if (answer.operator === "Divide /") {
        let divresult = divide(answer.num1, answer2.num2);
        console.log(chalk.cyanBright(`The answer by dividing ${answer.num1} and ${answer2.num2} is ${divresult}`));
    }
    else {
        console.log(chalk.bgRedBright("Invalid operator"));
    }
}
