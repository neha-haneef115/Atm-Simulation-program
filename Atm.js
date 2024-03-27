import inquirer from "inquirer";
const CurrentBalance = 10000;
console.log(`Your Current Balance is ${CurrentBalance}`);
const pinanswer = await inquirer.prompt([
    { message: "Enter your Pin: ", type: "number", name: "pin" }
]);
const pin = 1153;
if (pinanswer.pin === pin) {
    console.log("correct pin code");
    const select = await inquirer.prompt([{
            message: "What do you want to do? ",
            type: "list",
            name: "options",
            choices: ["withdraw", "check balance"],
        }]);
    if (select.options === "withdraw") {
        console.log("you chose to" + " Withdrawl");
        const select = await inquirer.prompt([{
                message: "How much amout you want to withdraw. ", type: "number", name: "amount"
            }]);
        console.log(`you have withdrwal ${select.amount}`);
        let remaining = CurrentBalance - select.amount;
        console.log(`your remaining balance is ${remaining}`);
    }
    else if (select.options === "check balance") {
        console.log(`your balance is ${CurrentBalance}`);
    }
}
else {
    console.log("you pin is incorrect");
}
