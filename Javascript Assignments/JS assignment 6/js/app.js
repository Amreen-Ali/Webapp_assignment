//using typeof() Divide the array in chunks according to data types.

var array = ['a','b','c','d','e','f','g','h',1,2,3,4,5,6,7,8,true,false,true,false,true,false,true,false , ['Abc'],['Xyz'],['Etc'],['...']];

var strings = []
var numbers = []
var boolean = []
var objects = []

for(var i=0; i<array.length; i++){
    if(typeof(array[i]) == "string"){
        strings.push(array[i])
    }

    if(typeof(array[i]) == "number"){
        numbers.push(array[i])
    }

    if(typeof(array[i]) == "boolean"){
        boolean.push(array[i])
    }

    if(typeof(array[i]) == "object"){
        objects.push(array[i])
    }
}

var chunks = [strings , numbers , boolean , objects]
console.log(chunks)
