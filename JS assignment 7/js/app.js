//Consider this text:


var text = "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog";
console.log("Text before : " + text)
//Task : 1) Replace these letters ("quick" , "brown" , "fox" , "lazy" , "dog") with ("lazy" , "black" , "cat" , "big" , "wall") respectively using slice(). //In one block of code

var temp = text.slice(0,4)+"lazy"+text.slice(9,10)+"black"+" "+"cat"+text.slice(19,35)+"big"+" "+"wall"+text.slice(43,48)+"lazy"+" "+"black"+" "+"cat"+text.slice(63,79)+"big"+" "+"wall"+text.slice(87,92)+"lazy"+" "+"black"+" "+"cat"+text.slice(107,123)+"big"+" "+"cat";

console.log("text after : " + temp)

//Task : 2) Replace the first occurrence of letter "jumps" with "bounce" using indexOf().

var text1 = "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog";
var letter = text1.indexOf("jumps")
text1 = text1.slice(0,letter) + "bounce" + text1.slice(letter + 5)
console.log("text 1 : " + text1)

//Task : 3) Replace the letter "brown" with "black" from last using lastIndexOf().

var text2 = "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog";
var lastletter = text.lastIndexOf("brown")
text2 = text2.slice(0,lastletter)+ "black" + text2.slice(lastletter + 5)
console.log("text 2 : " + text2)

//Task : 4) Replace the first occurrence of letter "The" with "A" using replace().

var text3 = text.replace("the", "A")
console.log("Replace text : ",text3)

//Task : 5) Replace "jumps" with "jumping" from complete text using replace().

var text4 = text.replace(/jumps/g , "jumping")
console.log("complete replace : "+ text4)

