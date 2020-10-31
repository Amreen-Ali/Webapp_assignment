//ES6 ASSIGNMENT 26
// Define all these topics with example?
//  CALL BACK FUNCTIONS
//  PROMISE
//  PROMISE.ALL
//  PROMISE.RACE



//CALL BACK FUNCTION
//A function which accepts another function argument and call automatically. it cames with the nested function.

function show(callback){
    var num = 21
    callback(num)
}

show(num => {
    console.log("it is an example of callback function : " + num)
})


//PROMISE
//Promise holds the asynchronize and makes synchronous depends on asynchronize.

console.log("step 1: it is synchronous")
new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            console.log("Step 2: it is asynchronize ")
            resolve()
        },3000)
    } catch (error) {
        reject()
    }
}).then(()=>{
    console.log("step 3: it is synchronous, but it depends on asynchronize")
})

//PROMISE ALL
//it works like && condition, means if all promise resolve it run otherwise it rejects.

const PromiseOne = new Promise((resolve, reject) => {
    resolve('Promise one resolved')
})

const PromiseTwo = new Promise((resolve, reject) => {
    resolve('Promise two resolved')
})

const PromiseThree = new Promise((resolve, reject) => {
    resolve('Promise three resolved')
})


Promise.all([PromiseOne, PromiseTwo, PromiseThree]).then(Response => {
    console.log(Response)
})

//PROMISE RACE


const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('one execute')
    }, 1000)
})

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('two execute')
    }, 3000)
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('three execute')
    }, 500)
})


Promise.race([promiseOne, promiseTwo, promiseThree]).then(Response => {
    console.log(Response)
})