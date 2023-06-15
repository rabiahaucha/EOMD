// let plants = JSON.parse(localStorage.getItem('plants'))
// let display = document.querySelector('#displayPlants')

// function showProducts(){
//   plants.forEach((plants) => {
//     display.innerHTML += `
//     <div class="col-sm-4 col-md-4 col-lg-4">
//     <div class="card" style="width: 18rem;">
//       <img class="card-img-top" src="${plants.image}" alt="${plants.species}">
//       <div class="card-body">
//         <h5 class="card-title">${plants.description}</h5>
//         <p class="card-text">${plants.amount}</p>
//         <ion-icon name="star-outline"></ion-icon>
//         <ion-icon name="star-outline"></ion-icon> <ion-icon name="star-outline"></ion-icon>
//         <ion-icon name="star-half-outline"></ion-icon>
//       </div>
//     </div>
//   </div>
//     `;
  
//   });
// }

// showProducts()

let plants = 
JSON.parse(localStorage.getItem('plants')) ? 
JSON.parse(localStorage.getItem('plants')) : 
localStorage.setItem('plants',JSON.stringify([
{
  id:0,
  species:"Rose",
  description:"Roses are often used in bouquets, these flowers have a sweet fragrance.",
  amount: 130,
  image:"https://i.postimg.cc/RZQRVW9r/rose-2.jpg",
},
{
  id:1,
  species:"Alocasia Zebrin",
  description:"Zebrina plants are a species of trailing houseplants with bright green and purplish foliage",
  amount: 220,
  image:"https://i.postimg.cc/QtmT77C5/zebrina-plantr-1.jpg",
},
{
  id:2,
  species:"Lavender",
  description:"Lavender is a small flowering shrub that has been used for centuries for its calming and relaxing properties",
  amount: 100,
  image:"https://i.postimg.cc/Jh7df9vW/lavendar-plant.jpg",
},
{
  id:3,
  species:"Amaryllis",
  description:"Amaryllis plants are a type of bulbous flowering plants native to South and Central America.",
  amount:  55,
  image:"https://i.postimg.cc/hv8LPGQZ/amaryliss-plant-2.jpg",
},
{
  id:4,
  species:"Aster",
  description:"Asters are popular garden plants, and many cultivars exist",
  amount:200,
  image:"https://i.postimg.cc/sxfX7f0N/aster-plant-1.jpg",
},
{
  id:5,
  species:"Iris",
  description:"In species with a rhizome, the stem is usually horizontal.",
  amount: 350,
  image:"https://i.postimg.cc/Y2ykbx49/iriss.jpg",
},
{
  id:6,
  species:"Daisy",
  description:"The plant has leafless flower stalks and hairy bracts",
  amount: 585,
  image:"https://i.postimg.cc/GmjsBN2t/daisy.jpg",
},
{
  id:7,
  species:"Sunflower",
  description:"The 'flower' of the common sunflower is actually a pseudanthium, or flowerhead.",
  amount: 214,
  image:"https://i.postimg.cc/Pryt1kmg/sun.jpg",
},
{
  id:8,
  species:"Jasmine",
  description:"This flower is a tubular with a flaring, lobed, pinwheel-like form.",
  amount: 200,
  image:"https://i.postimg.cc/0jZLKPLZ/jasmine.jpg",
}]));

let cartArr = []



// console.log(plants);
let display = document.querySelector('#displayPlants')


  display.innerHTML = ''
  plants.forEach((plants) => {
    display.innerHTML += 
    `
    <div class="col-sm-2 col-md-4 col-lg-4">
    <div class="card" style="width: 18rem; border: 3px solid black; height:42rem;margin-top:4rem;">
      <img class="card-img-top" src="${plants.image}" alt="${plants.species}">
      <div class="card-body">
        <h5 class="card-title">${plants.description}</h5>
        <p class="card-text">R${plants.amount}</p>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon> <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-half-outline"></ion-icon>
        <button class="btn btn-primary" onclick='addToCart(${JSON.stringify(plants)})'>Buy now</button>
      </div>
    </div>
  </div>
    `
  
  })
  function darkMode() {
    if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
    console.log(document.body.style.backgroundColor);
  }


function addToCart(plants){
  try {
    cartArr.push(plants)
    localStorage.setItem('checkout', JSON.stringify(cartArr))
  } catch (error) {
    alert(e)
  }
}