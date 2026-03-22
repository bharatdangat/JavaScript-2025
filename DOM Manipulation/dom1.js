//1)Selection of Element...
var h=document.querySelector('h1');
console.log(h);

//2)Changing HTML...
h.innerHTML='Welcome To Javascript';

//3)changing CSS..
h.style.color='green';
h.style.backgroundColor='yellow';
h.style.border='2px dashed black';

//4)Event Listener...
h.addEventListener('click',function()
                           {
                            console.log("Clicked on h1");
                           });

/*h.addEventListener('mousemove',function()
                  {
                   var h=document.querySelector('h2');
                   h.style.color='red';
                   h.style.backgroundColor='blue';
                   h.style.border='1px solid black';
                  });*/

