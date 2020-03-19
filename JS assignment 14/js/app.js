//ASSIGNMENT 14

// Create a calculator using function + switch case..
// Take 2 Numbers from input.
// Take Operator from input.
// Pass that details while calling function.
// Return the result of calculation


var input1 = +prompt("Enter first number")
var input2 = +prompt("Enter second number")
var Operator = prompt("Enter operator you want to perform")

function calculator(num1 , num2, op){
    console.log("A SIMPLE CALCULAOTR")
    switch(op){
        case "+":
            var result = num1+num2
            console.log(num1 + " + " + num2 + " = " + result)
            break;

        case "-":
            var result = num1-num2
            console.log(num1 + " - " + num2 + " = " + result)
            break;

        case "*":
            var result = num1*num2
            console.log(num1 + " * " + num2 + " = " + result)
            break;

        case "/":
            var result = num1/num2
            console.log(num1 + " / " + num2 + " = " + result)
            break;

        default:
            console.log("Invalid operator")
            break;
    }


}

calculator(input1, input2 , Operator)