//Assignment 12

//Here's an array in which you can see nested arrays with names.
//Create a function which takes a name in its parameter.
//Call that function like replaceNames("Sana");
//It replace all the "Sana" names in the array.
//If user entered invalid input in array then return the function else return new array.


var array = [["Ali","Ahmed","Shan","Zia","Sana","Khan"],["Ali","Ahmed","Shan","Zia","Sana","Khan"],["Ali","Ahmed","Shan","Zia","Sana","Khan"],["Ali","Ahmed","Shan","Zia","Sana","Khan"]];

function replaceNames(replaceWith, newValue) {
    var arr = []
    var nestedArray = []

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] === replaceWith) {
                nestedArray.push(newValue)
            } else {
                nestedArray.push(array[i][j])
            }
        }
        arr.push(nestedArray)
        nestedArray = []
    }
    return arr
}

var result = replaceNames('Sana', 'Hamza')
console.log("result", result)























