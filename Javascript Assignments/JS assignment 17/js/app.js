//ASSIGNMENT 17

function show(){
    alert("It is an example of onclick")
}

function zoomImg(x){
    x.style.height = "800px";
    x.style.width = "600px";
}

function outImg(y){
    y.style.height = "464px";
    y.style.width = "698px";
}

function myfocus(x){
   x.style.background = "cyan";
}

function myblur(x){
 x.style.background = "cyan";
}

function mykeypress(){
    alert("you have press a key")
}

function mysubmit(){
    var example = document.getElementById("getExample")
    console.log(example)
    alert("you have submitted")
    
}

function myclick(){
    var example = document.getElementById("getExample").innerHTML = "paragraph changed"; 
}

function mytagname(){
    var x= document.getElementsByTagName("LI");
document.getElementById("check").innerHTML = x[2].innerHTML;
}