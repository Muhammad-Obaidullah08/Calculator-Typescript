#!/usr/bin/env node
import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";
import { square } from "./square.js";
import { sqroot } from "./sqroot.js";
import { exponent } from "./exponent.js";
import { percentAge } from "./percentage.js";
import { percent } from "./percentage.js";
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.hex('#dbeb34')("The 'percentage %' operator will calculate the percentage of number 1 in number 2"));
console.log(chalk.hex('#dbeb34')("The 'percent %' operator will calculate the required percentage (number 2) of number 1"));
let answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: chalk.hex('#DEADED')("Enter first number")
    },
    {
        name: "operator",
        type: "list",
        choices: ["Add +", "Subtract -", "Multiply *", "Divide /", "Square **", "Square Root ***", "Exponent ^", "Percentage %", "Percent %"],
        message: chalk.hex('#eb8634')("Enter required operator")
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
            message: chalk.hex('#eb3477')("Enter second number")
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
    else if (answer.operator === "Exponent ^") {
        let expresult = exponent(answer.num1, answer2.num2);
        console.log(chalk.hex('#45fc03')(`The result of raising ${answer.num1} to the power ${answer2.num2} is ${expresult}`));
    }
    else if (answer.operator === "Percentage %") {
        let pcentresult = percentAge(answer.num1, answer2.num2);
        console.log(chalk.hex('#95oc89')(`The percentage of ${answer.num1} in ${answer2.num2} is ${pcentresult} %`));
    }
    else if (answer.operator === "Percent %") {
        let perresult = percent(answer.num1, answer2.num2);
        console.log(chalk.hex('#DEADED')(`${answer2.num2} % percent of ${answer.num1} is ${perresult}`));
    }
    else {
        console.log(chalk.bgRedBright("Invalid operator"));
    }
}
