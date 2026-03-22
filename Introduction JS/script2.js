console.log('Welcome to script 2')
 var no1=Number(prompt("Enter No-1:-"))
 var no2=Number(prompt("Enter No-2:-"))
 var c=no1+no2
for(var i=0;i<10;i++)
 {
    if(i==5)
    {
        continue
    }
   console.log(i);
 }
 i=0;
 while(i<=5)
 {
    if(i==3)
    {
        i++;   // Increment i before continuing
        continue
    }
   console.log(i)
   i++;
  }
 let str="Hello World"
 var sl=str.slice(0,2)

 10>5 ? console.log("Hello"): console.log("HI")