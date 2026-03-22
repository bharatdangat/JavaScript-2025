//Callback fun-function pass to the function at the time of function calling(is always annonymous).
function abcd(demo)
{
 demo();
} 

abcd(function()
{
 console.log("I am Callback function..");
});