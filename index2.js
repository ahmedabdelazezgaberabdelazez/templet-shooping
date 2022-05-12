let icones=document.querySelector(".iconr");
let buttont=document.querySelector("#btn");
let about=document.querySelector(".about");
let img=document.querySelector(".services");
let imges=document.querySelector(".sseting-box");
let seting=document.querySelector(".setting-contener");
let icone=document.querySelector(".itme-displey");
let iconer=document.querySelector(".iconer");
let cardes=document.querySelector(".prodects div");
let coges=document.querySelector(".prodects")
let badg=document.querySelector(".badg");
let cardess=document.querySelector(".cares")


let arrey=["7.webp","11.jpg","5.webp","12.jpg"];
img.style.backgroundImage='url("img/7.webp")';
let redem=Math.floor(Math.random() *arrey.length);
setInterval(()=>{
    let redem=Math.floor(Math.random() *arrey.length);
    img.style.backgroundImage='url("img/'+arrey[redem]+'")';
 
},2500);
let prodectd=[
    {
        id:1,
       title:"tap lenovo 13 p",
        ImageUrl:"ph/4.jpg",
      

}
,
{
    id:2,
  title:"tap sumsunig 12p",
    ImageUrl:"ph/1.jpg",

}
,
{
    id:3,
   title:"tap huwawey 13 p",
    ImageUrl:"ph/2.jpeg",

}
,
{
    id:4,
  title:"tap oppo 12 p",
    ImageUrl:"ph/00.jpg",

}
,
{
    id:5,
  title:"lap hp ci5",
    ImageUrl:"ph/3l.jpg",

}
,
{
    id:6,
   title:"lap del ci5",
    ImageUrl:"ph/2l.jpg",

}
,
];


function drop() {
    let prodectdome=prodectd.map((itme)=>{
        return`
        <div class="about-title">
        <div class="about-header">
        <p>sel 20%</p>
            <img src=${itme.ImageUrl}>
            <h3>${itme.title}</h3>
            <del>$20.00</del>
            <mark>$18.00</mark>
            <hr>
            <button id="check"onclick="prodectime(${itme.id})">Add to card</button>
            <i class="fa fa-heart"></i>
        </div><!-- about-header --> 
        </div><!-- about-title -->

        `;

    });
    about.innerHTML=prodectdome;
};

drop();
let arreyshoop=JSON.parse(localStorage.getItem("prodectincard"))?JSON.parse(localStorage.getItem("prodectincard")):[];
function prodectime(id) {
    let clickitme=prodectd.find((itme)=>itme.id===id)
    arreyshoop=[...arreyshoop,clickitme];
    localStorage.setItem("prodectincard", JSON.stringify(arreyshoop));
cardes.innerHTML += `<p>${clickitme.title}</p>`;
    let prodectitmes=document.querySelectorAll(".prodects div p");
    badg.style.display="block";
    badg.innerHTML=prodectitmes.length;


}
if(arreyshoop) {
    arreyshoop.map((itme)=>{
        cardes.innerHTML += `<p>${itme.title}</p>`;
    })
}
function doorp(){
    if (cardes!=="") {
        coges.style.display="block";
    }


}
iconer.addEventListener("click",doorp)

//icone
document.querySelector(".toogel-seting i").onclick=function(){
    this.classList.toggle("fa-spin");

 
    document.querySelector(".seting-box").classList.toggle("open");

}
//color
const color=document.querySelectorAll(".list li");

color.forEach(li=>{
li.addEventListener("click",(e)=>{


document.documentElement.style.setProperty('--main-color','e.target.dataset.color');
});
});

