let uesr=document.querySelector("#user");
let userinfo=document.querySelector("#user-info");
let nav=document.querySelector(".nav");
let prodects=document.querySelector(".about");
let add=document.querySelector(".cardes-prodect div ")
let addlist=document.querySelector(".cardes-prodect")
let badg=document.querySelector(".badg");
let displey=document.querySelector(".itme-displey");
let icones=document.querySelector(".icones")
if (localStorage.getItem("usernam")){
  nav.remove();
  user.style.display="block";
  userinfo.innerHTML=localStorage.getItem("usernam");
}
//arrey of object
let prodect=[
  {
    id:1,
    title:"iphne 11 pro max",
    price:25000,
    size:"lg",
    ImageUrl:"io/2.jpg",
  }
  ,
  {
    id:2,
    title:"iphne 11pro max",
    price:25000,
    size:"lg",
    ImageUrl:"io/3.jpg",
  }
  ,
  {
    id:3,
    title:"iphne 13 pro max",
    price:25000,
    size:"lg",
    ImageUrl:"io/4.jpg",
  }
  ,
  {
    id:4,
    title:"iphne 6 pro max",
    price:25000,
    size:"lg",
    ImageUrl:"io/5.jpg",
  }
  ,
  {
    id:6,
    title:"iphne 6 pro max",
    price:25000,
    size:"lg",
    ImageUrl:"io/6.jpg",
  }
  ,
  {
    id:7,
    title:"iphne 6 pro max",
    price:25000,
    size:"lg",
    ImageUrl:"io/5.jpg",
  }

];
function drop(){

  let prodectdom=prodect.map((itme)=>{
    return `
    <div class="about-title">
    <div class="about-title-header">
        <img src="${itme.ImageUrl}">
        <h2>${itme.title}</h2>
        <del>$25000</del>
        <mark>$20000</mark>
    </div><!-- about-header -->
    <div class="about-des">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>

    </div>  <!-- about-des -->
    <div class="about-desc">
        <button id="add to"onclick="prodectitme(${itme.id})">Add To cart</button>
        <i class="fa fa-heart"></i>
    </div><!-- about-desc -->
    </div>
</div><!-- about-title -->

`;
  });
  prodects.innerHTML=prodectdom;
};
drop();
function cheeckuser(){
  if (localStorage.getItem("username")){
    window.location="login.html";
    
  }else{
    window.location="sin.html";
  }
}
let arrey=[];
function prodectitme(id) {
let clickitme=prodect.find((itme)=>itme.id===id)
add.innerHTML +=`<p>${clickitme.title} </p>`;
arrey=[...arrey,add];
localStorage.setItem("prodects", JSON.stringify(arrey))
badg.style.display="block";
let prodectitmes=document.querySelectorAll(".cardes-prodect div p ");
badg.innerHTML=prodectitmes.length;
}

function displayes(){
  if(add.innerHTML!==""){

  
  addlist.style.display="block";

}
}
icones.addEventListener("click",displayes);
