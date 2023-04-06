import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";

import inquirer from "inquirer";

import chalk from "chalk";

let answer = await inquirer.prompt(
    [
        {
            name: "num1",
            type: "number",
            message: chalk.greenBright("Enter first number")
        },
        {
            name: "operator",
            type: "operator",
            message: chalk.blueBright("Enter required operator")
        },
        {
            name: "num2",
            type: "number",
            message: chalk.greenBright("Enter second number")
        }
    ]
);

if (answer.operator === "+") {

    let addresult = add(answer.num1, answer.num2);

    console.log(chalk.yellow(`The answer by adding ${answer.num1} and ${answer.num2} is ${addresult}`));

} else if (answer.operator === "-") {

    let subresult = subtract(answer.num1, answer.num2);

    console.log(chalk.green(`The answer by subtracting ${answer.num1} and ${answer.num2} is ${subresult}`));

} else if (answer.operator === "*") {

    let multiresult = multiply(answer.num1, answer.num2);

    console.log(chalk.magenta(`The answer by multiplying ${answer.num1} and ${answer.num2} is ${multiresult}`));

} else if (answer.operator === "/") {

    let divresult = divide(answer.num1, answer.num2);

    console.log(chalk.cyanBright(`The answer by dividing ${answer.num1} and ${answer.num2} is ${divresult}`));

} else {

    console.log(chalk.bgRedBright("Invalid operator"));

}

