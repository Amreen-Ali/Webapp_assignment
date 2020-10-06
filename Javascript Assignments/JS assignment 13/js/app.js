//ASSIGNMENT 13

//Perform all these topics with example?

// 1) Simple Function

function name(){
    var name = prompt("Enter your name?")
    console.log(name)
}

name()

// 2) Parameterized Function

function yourGender (gender){
    console.log("Gender : " , gender)
}

yourGender("female")

// 3) Function Returning

function Age(yourAge){
    if (yourAge >= 18){
        console.log("You are eligible to vote casting.")
        var EnterName = prompt("Enter your name")
        console.log("Name : ", EnterName)
        return EnterName
    }
    else{
        console.log("You are not eligible to vote casting.")
        return
    }

}

Age(18)

// 4) Local Variables

//Ans: Local variables are those which can be access within the function not the outside of function

function Country(){
    var YourCountry = prompt("Enter your country name?")
    console.log(YourCountry)
    console.log("it is the example of local variable")
}

Country()

// 5 & 6) Global Variables and Access Local Variables Globally using return

//Ans: Global variables are those which can be access within the function or outside of the function

function city(){
    console.log("it is the example of global variable")
    var YourCity = prompt("Enter your City name?")
    console.log(YourCity)
    return YourCity
}


var GlobalExample = city()
console.log("Globally used variable: " , GlobalExample)


// 7) While Loop

console.log("While loop Example")
    var i = 18
    while( i < 35 ){
        console.log(i)
        i++
    }



// 8) Do-while Loop

console.log("Do While loop Example")
    var i = 1
    do{
        console.log(i)
        i++
    }
    while(i<18)

// 9) Create function & variable then call and use that function in another script file.

    function LastName(){
        var name = prompt("Enter your last name?")
        return name
    }

    var Name = LastName()
    console.log("Globally Called: ", Name)