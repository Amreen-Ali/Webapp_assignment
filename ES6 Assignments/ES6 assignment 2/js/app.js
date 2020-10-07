// ES6 assignment 24
// Define all these topics with example? 
// 1) FETCH 
// 2) SET 
// 3) ARROW FUNCTIONS 
// 4) DEFAULT PARAMETERS 
// 5) QUERY SELECTORS 
// 6) SPREAD OPERATORS 
// 7) ARRAY REVERSE 
// 8) MAP OBJECT

//FETCH
//FETCH: it is a keyword of javascript used to connect the client side with the server site by using the API's.

//it is a get example of fecth. 
//Asynchronize: it takes delays.

fetch('https://jsonplaceholder.typicode.com/todos/66').then(function(response){
    return response.json()
}).then(function(result) {
    console.log('2',result)
})


//SET
//SET: it is a new way to create an array. it is not a loop or not a filter and it returns new values.

var alphabets = ['a','b','c','d','a','b','b','x','y','z']
var fix = new Set(alphabets)
console.log("FIX : ",fix)

fix.add ('J')
console.log("AFTER ADDING : ",fix)

fix.delete('z')
console.log("AFTER DELETION : ",fix)

fix.has('a')

//DEFAULT PARAMETERS
//DEFAULT PARAMETERS: if the value is not exist then it runs default value.

function callUser(phone = 'Unknown') {
    alert(`Calling: ${phone}`)
}

callUser()
callUser("Amreen")

//QUERY SELECTOR
//QUERY SELECTOR: 

var element = document.getElementById('selector')
var element1 = document.getElementById('root')

console.log("Element : ", element)
console.log("Element1 : ",element1)

//SPREAD OPERATOR
//SPREAD OPERATOR: it is used to combine twoo different arrays or objects into one array or object.

var arr1 = ['Amreen','Aaban','Ali']
var arr2 = ['Sana', 'Zara','Hamza', 23]

var joined = [...arr1, ...arr2]
console.log("New Array: ", joined)

var obj1 = {
    name : 'Amreen',
    age : '24',
}

var obj2 = {
    xname : 'Ali',
    xage : '25',
}

var combine = {
    ...obj1, 
    ...obj2
}
console.log("NEW OBJECT : ",combine)

//ARRAY REVERSE
//ARRAY REVERSE: it is used to reverse the values of an array.

var arr = [10,9,8,7,6,5,4,3,2,1,0]
var res = arr.reverse()
console.log("RESULT : ", res)


//MAP OBJECT
//MAP OBJECT:
var myMap = new Map();

myMap.set('name', 'Amreen')
myMap.set('age', 24)
var result = myMap.get('name')
var result2 = myMap.get('age')
console.log("Name :", result)
console.log("Age : ", result2)

