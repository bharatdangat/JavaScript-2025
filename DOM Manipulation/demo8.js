//Change,Click Example...
let fileinp=document.querySelector('#fileinp');
let btn=document.querySelector('#btn');
btn.addEventListener('click',function()
                    {
                     fileinp.click();
                    });

fileinp.addEventListener('change',function(dets)
                      {
                       btn.textContent=dets.target.files[0].name;
                      });                    