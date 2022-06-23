const num1 = parseFloat(prompt("Enter a number"));
const opr = prompt("Enter an operator(+,-,*,/)");
const num2 = parseFloat(prompt("Enter a number"));

let result;

if (opr === "+") {
  result = num1 + num2;
} else if (opr === "-") {
  result = num1 - num2;
} else if (opr === "*") {
  result = num1 * num2;
} else if (opr === "/") {
  result = num1 / num2;
} else {
  prompt("input a valid operator");
}

alert(`the result is : ${num1} ${opr} ${num2} = ${result}`);
