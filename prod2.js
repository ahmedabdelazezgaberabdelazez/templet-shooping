let prodect=localStorage.getItem("prodectincard");
let prodects=document.querySelector(".about");


if (prodect) {
    let itmes=JSON.parse(prodect);
    drowcard(itmes);
    
}
function drowcard(prodect){

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
          <button id="add to"onclick="remove(${itme.id})">remove</button>
          <i class="fa fa-heart"></i>
      </div><!-- about-desc -->
      </div>
  </div><!-- about-title -->
  
  `;
    });
    prodects.innerHTML=prodectdom;
  };