let email=document.querySelector("#email");
let password=document.querySelector('#password');
let form=document.querySelector("form");
form.addEventListener("submit",function(desc)
                     {
                      desc.preventDefault();
                      const emailRegex= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                      document.querySelector("#emailError").textContent="";
                      document.querySelector("#passwordError").textContent="";
                      let emailans=emailRegex.test(email.value);
                      let passwordans=passwordRegex.test(password.value);
                      
                      if(!emailans)
                      {
                        document.querySelector("#emailError").textContent="Incorrect Mail"; 
                    }
                      if(!passwordans)
                      {
                       document.querySelector("#passwordError").textContent="Incoorect Password";
                       }
                     });