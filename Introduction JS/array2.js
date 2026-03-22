var a=[10,20,30,40];
/*a.forEach(element => {
    
});*/

var ans=a.filter(function(value)
{
    return value==30;
});

//copy one arr into another
var arr1=[10,20,40,50,60,70];
var arr2=[...arr1];

///forech loop
var arr=[10,90,100,120,190];
for(var i of arr)
{
    console.log(i);
}

var str="javascript";
for(var i of str)
{
    console.log(i);
}

var arr3=[39,90,64,12,78,4,54,87.34];
arr3.sort(function(a,b)
{
    return a-b;//asc order
    //return b-a desc order
});

//Set
var arr4=[59,23,34,23,45,59,65,90,34];
var ans=[...new Set(arr4)];

//Reverse The Array..
var arr5=[1,2,3,4,5,6,7,8,9,10];
var rev=[];
for(var i=arr5.length-1;i>=0;i--)
{
    rev.push(arr5[i]);
}

//Find element occurs how many times in array...
let arr6=[2,3,4,3,2,3,4,6,4,3,4,2,4,5,6];
var obj={};
arr.forEach(function(val)
{
 obj[val]==undefined?(obj[val]=1):obj[val]++;
});

//closure -Function that return another function and returned function use parent function variable..
function abcd()
{
    var a=100;
    return function()
    {
     console.log(a);
    }
} 
abcd()();

//Set time to function...
function callerfun(fn)
{
 setTimeout(fn,3000);
}

callerfun(
    function()
    {
     console.log("function call after 3 sec..");
    });