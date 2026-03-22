document.write("Hello")

//1)Function Statement
function greet()
{
    console.log(" Function Ststement")
}
greet()

function greet2(var1)
{
    console.log(" Function Ststement with parameter"+var1)
}
greet("Bharat")

//2)function expression
let myfun=()=>
{
    console.log("Function Expression")
}
myfun();

//3)Annonymous Function
var abcd=function()
{
    console.log("Annonymous Function..")
}
//4)flat arrow function
var a=()=>{}
