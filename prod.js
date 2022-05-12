let about=document.querySelector(".about");




function prodectime(prodectd=[]) {
    let pope= JSON.parse(localStorage.getItem('prodectincard'))||prodectd;
        let prodectdome=prodectd.map((itme)=>{
        return`
        <div class="about-title">
        <div class="about-header">
        <div class="contect">
          
            
        
        <p>sel 20%</p>
            <img src=${itme.ImageUrl}>
            <h3>${itme.title}</h3>
            <del>$20.00</del>
            <mark>$18.00</mark>
            <hr>
            <button id="check"onclick="remove(${itme.id})">remove</button>
            <i class="fa fa-heart"></i>
        </div><!-- about-header --> 
        </div><!-- about-title -->
        </div>

        `;

    });
    about.innerHTML=prodectdome;
};
prodectime();
function remove(id){
if (prodect) {
    let car=JSON.parse(prodect)
 
  let filtter=car.filter((itme)=>car.id !==id)
  prodectime(filtter);

    localStorage.setItem("prodectincard",JSON.stringify(filtter));

}
}