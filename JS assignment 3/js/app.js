//CONSOLE QUIZ APPLICATION


var name = prompt("Enter Your Name")

var score = 0;
var correct = 0;

var q1 = prompt("Who is the prime minister of pakistan?")
var q2 = prompt("Which city is the capital of pakistan?")
var q3 = prompt("what is the national sport of Pakistan?")
var q4 = prompt("PSL 5 is held in which country?")
var q5 = prompt("there is a limit of age while casting the vote in pakistan?")
var q6 = +prompt("opening ceremoney of psl 5 was held in which city?")
var q7 = prompt("Bill Gates invented?")
var q8 = prompt("html stands for?")
var q9 = prompt("previous name of karachi is?")
var q10 = prompt("css stands for?")

if(q1 == 'imran khan'){
    ++score;
    ++correct;
}else{
    --score;
}
if(q2 == 'islamabad'){
    ++score;
    ++correct;
}else{
    --score;
}
if(q3 == 'hockey'){
    ++score;
    ++correct;
}else{
    --score;
}
if(q4 == 'pakistan'){
    ++score;
    ++correct;
}else{
    --score;
}
if(q5 == 'yes'){
    ++score;
    ++correct;
}else{
    --score;
}
if(q6 == 'karachi'){
    ++score;
    ++correct;
}else{
    --score;
}
if(q7 == 'microsoft'){
    ++score;
    ++correct;
}else{
    --score;
}
if(q8 == 'hyper text markup language'){
    ++score;
    ++correct;
}else{
    --score;
}
if(q9 == 'kolachi'){
    ++score;
    ++correct;
}else{
    --score;
}
if(q10 == 'cascading style sheet'){
    ++score;
    ++correct;
}else{
    --score;
}
var percentage = (score * 100) / 10
var grade;

if (percentage >= 80 && percentage <= 100)
{
    grade = "A +";
}
else if (percentage >= 70 && percentage < 80)
{    grade = "A";
}
else if (percentage >= 60 && percentage < 70)
{
    grade = "B";
}
else if (percentage >= 50 && percentage < 60)
{
    grade = "C";
}
else if (percentage >= 40 && percentage < 50)
{
    grade = "D";
}
else if (percentage >= 35 && percentage < 40)
{
    grade = "E";
}
else{
    grade = "F";
}

console.log("MARKS SHEET")
console.log("Name : ",name)
console.log("Total Score : ",score)
console.log("Total Number Of Correct Answer : ",correct)
console.log("Percentage : ",percentage)
console.log("Grade : ",grade)