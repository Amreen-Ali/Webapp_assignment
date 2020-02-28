
//QUESTION # 1

//Q_1A Create an array with 4 students name? i.e : var students = ['Ali','Faizan','Sami','Saad'];

var Students = ['Ali', 'Faizan', 'Sami','Saad']

//Q_1B Create another array with for obtained marks for these students respectively? i.e : var obtainedMarks = [100,200,300,400];

var Obt = [100 , 200 , 300 , 400]

//Q_1C Assume that total marks are 500 for each student. i.e : var totalMarks = 500;
var TotalMarks = 500;


//calculate percentage


var res1= (Obt[0]*100)/500;
var res2= (Obt[1]*100)/500;
var res3= (Obt[2]*100)/500;
var res4= (Obt[3]*100)/500;
var res = [res1,res2,res3,res4]

//calculating grade

var grade=[];
for(i=0; i<4; i++){
    
if (res[i] >= 80 && res[i] <= 100 )
{
    grade[i] = "A +";
}
else if (res[i] >= 70 && res[i] < 80 )
{    grade[i] = "A";
}
else if (res[i] >= 60 && res[i] < 70 )
{
    grade[i] = "B";
}
else if (res[i] >= 50 && res[i] < 60 )
{
    grade[i] = "C";
}
else if (res[i] >= 40 && res[i] < 50 )
{
    grade[i] = "D";
}
else if (res[i] >= 35 && res[i] < 40 )
{
    grade[i] = "E";
}
else{
    grade[i] = "Fail";
}

}

//Q_1C Display the scores , percentages & grade of students like this without using loop?

console.log("Score of " + Students[0] + " is " + Obt[0] + ", percentage is " + res1 +"%" + " and grade is " + grade[0] + ".")
console.log("Score of " + Students[1] + " is " + Obt[1] + ", percentage is " + res2 +"%" + " and grade is " + grade[1] + ".")
console.log("Score of " + Students[2] + " is " + Obt[2] + ", percentage is " + res3 +"%" + " and grade is " + grade[2] + ".")
console.log("Score of " + Students[3] + " is " + Obt[3] + ", percentage is " + res4 +"%" + " and grade is " + grade[3] + ".")




// QUESTION # 2

//Q_2A Initialize an array with color names. Display the array elements in your console?

var color = ["Blue", "Black", "Violet", "Red", "Green"]
 console.log(color)

//Q_2B Ask the user what color he/she wants to add at the beginning & add that color at the beginning of the array. Display the updated array in your console?

var big = prompt("Enter color name which u want to add at beginning of array?")
color.unshift(big)
console.log(color)

//Q_2C Ask the user what color he/she wants to add at the end & add that color at the end of the array. Display the updated array in your console?

var end = prompt("Enter color name which u want to add at end of array?")
color.push(end)
console.log(color)

//Q_2D Add two more color at the beginning of the array. Display the updated array in your console?

color.unshift("brown")
color.unshift("purple")
console.log(color)

//Q_2E Add two more color at the end of the array. Display the updated array in your console?

color.push("brown")
color.push("purple")
console.log(color)

//Q_2F Delete the first color from the array. Display the updated array in your console?

color.shift()
console.log(color)

//Q_2G Delete the last color from the array. Display the updated array in your console?

color.pop()
console.log(color)

//Q_2H Ask the user at which index he/she wants to add a color. Then add that color to the desired position/index. . Display the updated array in your console?

var index = +prompt("Enter index where you want to add a color?")
var index_color = prompt("Enter a color name you want to add?")
color.splice(index,0, index_color)
console.log(color)

//Q_2I Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your console?

var index_c = +prompt("Enter index number you want to delete a color?")
var index_length = +prompt("Enter the length you want to delete?")
color.splice(index_c,index_length)
console.log(color)

//QUESTION # 3

//Write a program that takes a number from user and display the multiplication table?

var table = +prompt("Enter a number you want to print a table?")

for (i=1; i<11; i++){
    console.log(table + " * " + i + " = " + table*i )

}