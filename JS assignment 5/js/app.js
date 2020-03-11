//ASSIGNMENT 5

//Q_1 Write a program that takes input a name from user & greet the user like this: 


var name = prompt("Enter your name")
alert("Hi " + name)

//Q_2 Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 

var table = +prompt("Enter a number you want to print a table?" , 5)


for (i=1; i<11; i++){
    console.log(table + " * " + i + " = " + table*i )

}


//Q_3 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 

var city = prompt("Enter the name of city")
if(city ==="karachi" || city ==="Karachi")
{
    alert("Welcome to the city of light")
}

//Q_4  Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 

var gender = prompt("Enter your gender")
if(gender == "male")
{

    alert("Good Morning Sir,")
}
else if(gender == "female")
{
    alert("Good Morning Madam,")
}

//Q_5 Write a program to take input color of road traffic signal from the user & show the message according to this table: 

    var traffic1 = prompt("Enter one color of traffic signal")
    var traffic2 = prompt("Enter second color of traffic signal")
    var traffic3 = prompt("Enter third color of traffic signal")

    if(traffic1 == "red" || traffic2 == "red" || traffic3 == "red"){
        console.log("red: vehicle must stop")
    
    }
    if(traffic1 == "yellow" || traffic2 == "yellow" || traffic3 == "yellow"){
        console.log("yellow: vehicles should get ready to move  ")
        
    }
    if(traffic1 == "green" || traffic2 == "green" || traffic3 == "green"){
        console.log("green: vehicles can move now  ")
        
    }

//Q_6 Write a program to take input max age & current age from user. If the current age is less than or equal to max age, show the message “You are welcome” 

var MaxAge = +prompt("Enter maximum age?")
var CurrentAge = +prompt("Enter current age?")

if(CurrentAge <= MaxAge){
    alert("You Are Welcome")
}

//Q_7  Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 

var RemainFuel = +prompt("Enter maximum age?")
var CurrentFuel = +prompt("Enter current age?")

if(CurrentFuel < 0.25){
    alert("please fill the fuel")
}


//Q_8 Run this script, & check whether alert message would be displayed or not. Record the outputs. 
//a. 
var a = 4; 
    if (++a === 5){     
        alert("given condition for variable a is true"); 
    }  
    //OUTPUT: alert is working.
//b. 
var b = 82; 
    if (b++ === 83){     
        alert("given condition for variable b is true"); 
    }  
    //OUTPUT: alert is not working.
//c. 
var c = 12; 
    if (c++ === 13){     
        alert("condition 1 is true"); 
    } 
    if (c === 13){     
        alert("condition 2 is true"); 
    } 
    if (++c < 14){     
        alert("condition 3 is true"); 
    } 
    if(c === 14){     
        alert("condition 4 is true"); 
    } 
    
    //OUTPUT:  in this condition 2 and condition 4 are working.
//d. 
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
    if (totalCost === laborCost + materialCost){     
        alert("The cost equals"); 
    }  
    //OUTPUT: alert is working.
//e. 
if (true){    
     alert("True"); 
    } 
    if (false){     
        alert("False"); 
    }  

    //condition for true is working.
//f. 
    if("car" < "cat"){     
    alert("car is smaller than cat");
    }

//OUTPUT: alert is working.


//Q_9 Write a program to take input the marks obtained in three subjects & total marks. 
    //Compute & show the resulting percentage on your page. 
    //Take percentage & compute grade as per following table:  
    // Percentage % Grade Remarks Greater than or equal to 80 A-one Excellent, Greater than or equal to 70 A Good Greater than or equal to 60 B You need to improve Less than 60 Fail Sorry 
    // Show the total marks, marks obtained, percentage, grade & remarks like: 

var obt = +prompt("Enter the obtained marks.")
var totalMarks = +prompt("Enter the total marks")

var percent = (obt * 100) / totalMarks
var grade;
var remarks;
if(percent >= 80 ){
    grade = "A-One"
    remarks = "Excellent"
}
else if(percent >= 70){
    grade = "A"
    remarks = "Good"
}
else if(percent >= 60){
    grade = "B"
    remarks = "You need to improve"
}
else if(percent < 60){
    grade = "Fail"
    remarks = "Sorry"
}


console.log("MARKS SHEET")
console.log("Total Marks: ", totalMarks)
console.log("Obtained Marks: ", obt)
console.log("Percentage: ", percent, "%")
console.log("Grade: ", grade)
console.log("Remarks: ", remarks)



//Q_10 Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
//Take input from users, the following:  a. Name of item1  b. Name of item2 c. Price of item 1 d. Price of item 2 e. Ordered quantity of item 1  f. Ordered Quantity of item 2 g. Shipping charges Compute the total cost. 
//If the total cost is above 2000 PKR , offer them 10% discount & show the receipt in your browser. 

var item1 = prompt("Name of item 1")
var PriceItem1 = +prompt("Price of item 1")
var quantity1 = +prompt("Enter the quantity of item")
var item2 = prompt("Name of item 2")
var PriceItem2 = +prompt("Price of item 2")
var quantity2 = +prompt("Enter the quantity of item")
var shipping = +prompt("Enter shipping charges.")

price1 = PriceItem1 * quantity1;
price2 = PriceItem2 * quantity2;
TotalPrice = price1 + price2 + shipping;
var discount;
var AfterDiscount;
if(TotalPrice > 2000){
    discount = TotalPrice * .10 
    AfterDiscount = TotalPrice - discount
}


console.log("SHOPPING CART")
console.log("price of "+ item1 + ": "+ PriceItem1)
console.log("quantity of "+ item1 + ": " + quantity1)
console.log("price of "+item2 + ": "+ PriceItem2)
console.log("quantity of "+ item2 +": "+ quantity2)
console.log("shipping charges: " + shipping)
console.log("Total cost of your order is : "+ TotalPrice + " PKR")
console.log("Discounted price is : "+ AfterDiscount +" PKR")


//Q_11 Guess game:  Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
    // a. If user guesses the same number, show  “Bingo! Correct answer”. 
    // b. If the guessed number +1 is the secret number, show  “Close enough to the correct answer”.


var SecretNumber = 7
var guess = +prompt("Guess the secret number")
if(guess == SecretNumber){
    alert("Bingo! correct answer")
}
else if(guess == SecretNumber+1){
    alert("Close enogh to the correct answer")
}

//Q_12 Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.  

var num = +prompt("Enter any number")
if( num % 3 == 0){
    alert("The given number is divisible by 3")
}

// Q_13 Names & Total scores of two teams are taken as input. Write a program that shows which team has won the game or show if there is a tie. (Team A or Team B)   

var TeamName1 = prompt("Enter first team name")
var Team1 = +prompt("Enter there score")
var TeamName2 = prompt("Enter second team name")
var Team2 = +prompt("Enter there score")

if (Team1 > Team2){
    alert(TeamName1 + " won the match")
}
else if(Team2 > Team1){
    alert(TeamName2 + " won the match")
}
else{
    alert(TeamName1 + " or " + TeamName2)
}

//Q_14 Take a string, a number and a Boolean in three variables. Write a program that checks the type of variables & responds accordingly

var checkString = prompt("Enter the string")
var checkNumber = +prompt("Enter any number")
var checkBoolean = prompt("Enter the boolean value")

if(typeof(checkString) =="string" ){
    alert(checkString + " is a string")
}
if(typeof(checkNumber) =="number" ){
    alert(checkNumber + " is a Number")
}
if(typeof(checkBoolean) == "boolean"){
    alert(checkBoolean + " is a boolean")
}


//Q_15 Write a program that checks whether the given input is an even number or an odd number. 

var CheckEven = +prompt("Enter any number")
if((CheckEven % 2 ) == 0 ){
    alert(CheckEven + " is an even number")
}
else{
    alert(CheckEven + " is an odd number")
}


//Q_16 Weather in Karachi nowadays is too cool, write a program that takes temperature as input and shows a message based on following criteria 
    //a. T > 40 then “It is too hot outside.” 
    //b. T > 30 then “The Weather today is Normal.” 
    //c. T > 20 then “Today’s Weather is cool.” 
    //d. T > 10 then “OMG! Today’s weather is so Cool.” 

var temperature = +prompt("Enter temprature value")
if(temperature > 40){
    alert("It is too hot outside.")
}
else if(temperature > 30){
    alert("The Weather today is Normal.")
}
else if(temperature > 20){
    alert("Today’s Weather is cool.")
}
else if(temperature > 10){
    alert("OMG! Today’s weather is so Cool.")
}

//Q_17 Write a program to create a calculator for +,-,*, / & % using if statements. 
    //Take the following input: 
    //a. First number 
    //b. Second number 
    //c. Operation (+, -, *, /, %) 
    //Compute & show the calculated result to user. 

var FirstNumber = +prompt("Enter first number")
var SecondNumber = +prompt("Enter second number")
var operator = prompt("Enter operator")

if(operator == "+"){
    alert(FirstNumber + SecondNumber)
}
else if(operator == "-"){
    alert(FirstNumber - SecondNumber)
}
else if(operator == "*"){
    alert(FirstNumber * SecondNumber)
}
else if(operator == "/"){
    alert(FirstNumber / SecondNumber)
}
else if(operator == "%"){
    alert(FirstNumber % SecondNumber)
}

//Q_18 Write a program that takes user input day name. 
    //If the day is Monday, Tuesday, Wednesday, Thursday or Friday, then show “It’s a week day”. 
    //If the day is Saturday then show “It’s weekend”. 
    //If the day is Sunday then show “Yay! It’s a holiday”.

var day = prompt("Enter a day")
if(day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
    alert("It’s a week day")
}
else if(day == "saturday"){
    alert("It’s weekend")
}
else if(day == "sunday"){
    alert("Yay! It’s a holiday")
}

//Q_19 Write a program that takes input user’s score, if it’s greater than 50, say “You are passed”. Otherwise, show “Try again!” 

var UserScore = +prompt("Enter your score")
if(UserScore > 50){
    alert("You are passed")
}
else{
    alert("Try again!")
}

//Q_20 Write a program that: 
    //a. takes 2 numbers. 
    //b. tells whichever number is the greater (higher) number. 
    //c. tells if they are equal Show the output to make sure it works 
    //(e.g. "The greater number of 5 and 10 is 10."). 

var No1 = +prompt("Enter any number")
var No2 = + prompt("Enter another number")

if(No1 > No2){
    alert("The greater number " + No1 + " and " + No2 + " is " +No1)
}
else if(No2 > No1){
    alert("The greater number " + No1 + " and " + No2 + " is " +No2)
}
if(No1 == No2 ){
    alert("both are equal")
}

//Q_21 Write a program that: 
    //a. takes 1 input, a language code (e.g. "es", "de", "en") 
    //b. tells "Hello, World" for the given language, for atleast 3 languages. 
    //It should default to returning English. 
    //(Hint: use translate.google.com to check the translation of hello world in different languages) 

var language = prompt("Enter a language code")
if (language == "en"){
    alert("Hello world")
}
else if (language == "es"){
    alert("Saluton mondo")
}
else if (language == "sp"){
    alert("Hola Mundo")
}
//Q_22 Write a program to take input a number & tell whether it’s a positive or negative number

var CheckNum = +prompt("Enter number ")
if(CheckNum >= 0){
    alert("The number "+ CheckNum + " is positive")
}
else{
    alert("The number "+ CheckNum + " is negative")
}

//Q_23 The Pluralizer: Write a program that: 
    //a. takes 2 inputs, a noun and a number. 
    //b. tells the number and pluralized form, like "5 cats" or "1 dog".

var No = +prompt("Enter a number")
var noun = prompt("Enter any noun")
if(No != 1 ){
    alert(No + " " + noun + 's')
}
else{
    alert(No + " " + noun) 
}











































































