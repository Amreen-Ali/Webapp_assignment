//Alert Example

alert("Welcome to the Javascript")


//Variable for string Example

var name = "Amreen";
alert(name)

console.log(name)
name = "Ahmed"
console.log(name)

//Variable for number Example

var marks = 50;
alert(marks)

console.log(marks)
marks = 60;
console.log(marks)

var mark1 = 50;
var mark2 = 60;
var addition = mark1 + mark2;
alert(addition)

addition = mark1 + mark2 - 20;
alert(addition)

//Familiar Operation Example

var num1 = 20;
var num2 = 10;

var add = num1 + num2;
alert(add)

var sub = num1 - num2;
alert(sub)

var mul = num1 * num2;
alert(mul)

var modulo = num1 % num2;
alert(modulo)

var divide= num1 / num2 ;
alert(divide)

//Unfamiliar Operation

//post Increment
var n = 5;
console.log(n)
n++;
console.log("Post Increment",n)

//Post Decrement
n--;
console.log("Post Decrement",n)

//Pre Increment
++n;
console.log("Pre Increment",n)

//Pre Decrement
--n;
console.log("Pre Increment",n)

//EXAMPKE
var m = 10;
m++ + m - --m - m++ + --m - ++m;
console.log("The value of m is now: ",m)


//MATHS Expression with or without BODMAS RUle

//Without BOSMAS 
var total = 5 + 3 * 4 + 7;
console.log("Total value : ",total)

//With BODMAS
total = (5 + 3) * (4 + 7);
console.log("Total Value : ",total)

//CONCATINATION

var country = "Pakistan";
var word = "Zindabad";
console.log("After Concatination : ",country + word)

var val1 = "5";
var val2 = "5";
console.log("Numbers concatination : ",val1 + val2)
var val3 = 5;
var val4 = 4 ;
console.log(val3, val4)
