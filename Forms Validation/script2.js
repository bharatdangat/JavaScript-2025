let form=document.querySelector('form');

form.addEventListener('submit',function(desc)
{
    desc.preventDefault(); //not reload page or not submit form before function check
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,5}$/;
    let ans=regex.test("bharatdangat2005@gmail.com");
    console.log(ans);
});