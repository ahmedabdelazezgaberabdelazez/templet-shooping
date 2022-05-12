let username=document.querySelector("#username");
let password=document.querySelector("#password");
let btn=document.querySelector("#btn");

btn.addEventListener("click",function(){
 
    if (username.value===""||password.value==="") {
        alert("plse enter value");
        
    }
    else{
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",username.value);

    }
    setTimeout(()=>{
window.location="index.html";
  },1200)
})

