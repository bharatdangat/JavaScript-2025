var h2=document.querySelector('h2');
var btn=document.querySelector('button');
var flag=0;
 btn.addEventListener('click',demo);
 function demo()
 {
    if(flag==0)
    {
    h2.innerHTML='Friend'
    h2.style.color='blue';
    btn.innerHTML='Remove'
    flag=1;    
   }
   else
  {
   h2.innerHTML='Stranger'
    h2.style.color='tomato';
    btn.innerHTML='Add Friend' 
    flag=0; 
   }
 }

