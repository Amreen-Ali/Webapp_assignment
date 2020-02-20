//Prompt

var name = prompt("Enter your Name?")
console.log("Name: ",name)

//Parse a prompt

var Age = +prompt("Enter your Name?")
console.log("Age : ",Age)


//Comparison Operator

// ===
var num = +prompt("Enter a number")

if(num === 7){
    console.log("Number : ",num)
}

//!==

var num = +prompt("Enter a number")

if(num !== 7){
    console.log("Number : ",num)
}


// ==
var num = prompt("Enter a number")

if(num == 7){
    console.log("Number : ",num)
}

//!=

var num = prompt("Enter a number")

if(num != 7){
    console.log("Number : ",num)
}

//>

var num = +prompt("Enter a number")

if(num > 7){
    console.log("Number : ",num)
}

// <

var num = +prompt("Enter a number")

if(num < 7){
    console.log("Number : ",num)
}

//>=

var num = +prompt("Enter a number")

if(num >= 7){
    console.log("Number : ",num)
}

// <=

var num = +prompt("Enter a number")

if(num >= 7){
    console.log("Number : ",num)
}

//<=

//If-Else Statement
var num = +prompt("Enter a number")

if(num == 7){
    console.log("IF STATEMENT :  ",num)
}
else{
    console.log("ELSE STATEMENT : ",num)
}

//NESTED IF ELSE STATEMENT

var age = +prompt("Enter your age")
if(age >= 18){
    var nic = prompt("Do you have CNIC")
    if(nic === "yes"){
        alert("you can vote during election")
    }
    else{
        alert("first apply for CNIC")
    }

}
else{
    alert("You are not eligible for vote casting")

}

//conditional operator

var age = +prompt("Enter your age")
var nic = prompt("Do you have CNIC")

if(age >=18 && nic === "yes")
{
    console.log("You are eligible for vote casting")

}
else{
    console.log("you are not eligible for vote casting")
}

var age = +prompt("Enter your age")
var gpa = +prompt("Enter your GPA")
if(age >= 18 || gpa == 2.5){

    console.log("you can play cricket")
}

