//regest user
let user=document.querySelector("#user");
let password=document.querySelector("#password");
let email=document.querySelector("#email");
let phone=document.querySelector("#phone");
let btn=document.querySelector("#btn");


btn.addEventListener("click",function(e){
    e.preventDefault();
    if (user.value ===""||password.value===""||email.value===""||phone.value==="") {
        alert("ples enter value");
        
    }else{
        localStorage.setItem("usernam",user.value);
        localStorage.setItem("password",password.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("phone",phone.value);


    }
   setTimeout(() => {
       window.location="index.html";
   },1500);
})

