let CheckOutList = JSON.parse(localStorage.getItem('checkout')) ? JSON.parse(localStorage.getItem('checkout')) : []
console.log(CheckOutList);

let showPlantsItem = document.querySelector('#show-plants')

function showPlants(){
    showPlantsItem.innerHTML = ''
    CheckOutList.forEach((plantItem) =>{
        showPlantsItem.innerHTML += `
        
        <div class="col mb-5">
    <div class="card" style="width: 18rem; border: 3px solid black; height: 100%;">
      <img class="card-img-top" src="${plantItem.image}" alt="${plantItem.species}">
      <div class="card-body">
        <h5 class="card-title">${plantItem.description}</h5>
        <p class="card-text">${plantItem.amount}</p>
      </div>
    </div>
  </div>
        `
    })
}

showPlants()

function checkoutProducts(item) {
    try{
       
        CheckOutList.push(item);
        localStorage.setItem('checkout', JSON.stringify(CheckOutList));
    }catch(e) {
        console.log(`Error message: ${e.message}`);
    }
}
function darkMode() {
    if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
    console.log(document.body.style.backgroundColor);
  }