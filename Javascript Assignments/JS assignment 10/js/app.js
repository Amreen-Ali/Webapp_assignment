//ASSIGNMENT 10

//1)Write a program that displays current date and time in your browser.

var date = new Date()
console.log("Current Date And Time : ", date)


//2) Write a program that ask user to enter number of month and show the month in words. For example December.

var  month = +prompt("Enter the number of the month?")
switch(month){
    case 1:
            console.log("January")
            break;
    case 2:
            console.log("February")
            break;
    case 3:
            console.log("March")
            break;
    case 4:
            console.log("April")
            break;
    case 5:
            console.log("May")
            break;
    case 6:
            console.log("June")
            break;    
    case 7:
            console.log("July")
            break;
    case 8:
            console.log("August")
            break;
    case 9:
            console.log("September")
            break;
    case 10:
            console.log("October")
            break;
    case 11:
            console.log("November")
            break;
    case 12:
             console.log("December")
            break;
    default:
            console.log("Incorrect input")
            break;
        }

//3) Write a program that tests whether it's before noon and alert “Its AM” else “its PM”


var noon = new Date()
if(noon.getHours() > 12 ){
    console.log("It's PM")
}
else{
    console.log("It's AM")
}


//4) Create a date object of the starting date of this Independence Day and alert the number of days past since the event.

var CurrentDate = new Date("August 14 2020")
console.log(" Current IndependanceDay " , CurrentDate)
var Independanceday = new Date("August 14 1947");
console.log(" Previous IndependanceDay " , Independanceday)
var timeDifference = CurrentDate.getTime() - Independanceday.getTime()
var Day =  ( timeDifference / (1000*60*60*24) )
alert("Number of days past since the event : " + parseInt(Day))

//5) Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var Age = +prompt("enter your age");
var currentYear = new Date().getFullYear();
console.log("your birth year is : " , currentYear - Age)