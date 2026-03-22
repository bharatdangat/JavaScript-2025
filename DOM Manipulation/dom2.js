//1]Selection of element
//var box=document.getElementById('box')
//var box1=document.querySelector('#box') //div
var p=document.querySelector('h1')

var allh2=document.querySelectorAll('h2')
console.log(allh2[0])
console.log(allh2[1])
console.log(allh2[2])
console.log(allh2[3])

//2]Changing HTML-
//box.textContent='<h1>Hey Guys</h1>'

//4]Event Listener..
var button=document.querySelector('button');
var box=document.querySelector('#box');
button.addEventListener('click',function()
                                {
                                  box.style.backgroundColor='red'   
                                })
// button.addEventListener('click',changeBox)

//  function changeBox()
//  {
//    box.style.backgroundColor='red'   
     
//  }