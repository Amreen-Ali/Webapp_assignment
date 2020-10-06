//ES6 ASSIGNMENT 23
// Define all these topics with examples? 
// 1) LET/CONST 
// 2) MAP (LOOPING) 
// 3) FILTER 
// 4) TEMPLE LITERALS 
// 5) FOR EACH

//LET / CONST

// LET: let is used to declare a variable also it re-assign the value of variable.
let name = "Amreen Ali"
console.log("name: ",name)
name = "Fatima"
console.log("name: ",name)


//CONST
// CONST: const is used to declare the variable but it does not re-assign the value.

const city = "Karachi"
console.log("city : ",city)
//city = "Lahore"
console.log("city : ",city)

//MAP (LOOPING)
//MAP: it is the array method and used for the looping. it returns a new array.
var drink = ['pepsi', '7up', 'coca-cola', 'marinda' , 'dew']
drink.map(function(value , ind){
    if(value == 'coca-cola'){
        console.log("Drink Available: ",value)
    }
    else{
        console.log("Out of stock : ",value)
    }
}
)

//FILTER
//FILTER: it is the array method. it executes the callback function and also check the return value.
const color = ['Red', 'blue', 'green', 'yellow','blue', 'orange', 'violet']
const arr = color.filter(function(value, ind)
{
    return value === 'blue'
})
console.log(arr)

//TEMPLE LITERLAlS
//TEMPLE LITERALS: Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
const parent = document.getElementById('root')
parent.innerHTML += `<h1>Pakistan</h1>`

const heading = 'ES6 Assignment 23'
parent.innerHTML +=`${heading}`

//FOR EACH
//FOREACH: it executes the callback function. 
color.forEach(function(value, ind)
{
    if(value == 'blue'){
        console.log("Color found: ", value)
    }
    else{
        console.log("no color found",ind)
    }
})
