
/**Return Function */
//(both function same name not allow...)
function abcde()
{
 return function()
 {
    return function()
    {
     console.log("abcde Higher Order Function...");
    }
 }
}

abcde()()();
/**Pass Function as Parameter.. */
//Way 1-
function abcd(demo)
{
 demo();
}

function demo()
{
    console.log("abcd is Higher Oder Function.2");
}

abcd(demo);


//way-2
/*abcd(function()
{
    console.log("abcd is Higher Oder Function2.");
});*/
