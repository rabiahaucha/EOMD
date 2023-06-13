const addBtn = document.querySelector('#add-btn');
const editBtn = document.querySelector('#editBtn')
const featuredPosts = [];
let deleteButtons;

let plants = JSON.parse(localStorage.getItem('plants')) ? JSON.parse(localStorage.getItem('plants')) : [{
  id:0,
  species:"Rose",
  description:"Roses are often used in bouquets, these flowers have a sweet fragrance and the leaves are glossy and deep green.",
  amount:"R 130",
  image:"https://i.postimg.cc/RZQRVW9r/rose-2.jpg",
},
{
  id:1,
  species:"Alocasia Zebrin",
  description:"Zebrina plants, often referred to as “wandering jew” plants, are a species of trailing houseplants with bright green and purplish foliage",
  amount:"R 220",
  image:"https://i.postimg.cc/QtmT77C5/zebrina-plantr-1.jpg",
},
{
  id:2,
  species:"Lavender",
  description:"Lavender is a small flowering shrub that is native to the Mediterranean region and has been used for centuries for its calming and relaxing properties",
  amount:"R 100",
  image:"https://i.postimg.cc/Jh7df9vW/lavendar-plant.jpg",
},
{
  id:3,
  species:"Amaryllis",
  description:"Amaryllis plants are a type of bulbous flowering plants native to South and Central America. They are well known for their large, showy blooms that come in a variety of colors including white, pink, and red.",
  amount:"R 55",
  image:"https://i.postimg.cc/hv8LPGQZ/amaryliss-plant-2.jpg",
},
{
  id:4,
  species:"Aster",
  description:"Aster plants are flowering plants of the genus Aster, which is part of the family Asteraceae. Asters are popular garden plants, and many cultivars exist",
  amount:"R 200",
  image:"https://i.postimg.cc/sxfX7f0N/aster-plant-1.jpg",
},
{
  id:5,
  species:"Iris",
  description:"rises are either bulbous or rhizomatous (with thick creeping underground stems). In species with a rhizome, the stem is usually horizontal, robust, and ringed with leaf scars.",
  amount:"R 350",
  image:"https://i.postimg.cc/Y2ykbx49/iriss.jpg",
},
{
  id:6,
  species:"Daisy",
  description:"It has numerous spoon-shaped, slightly hairy leaves near its base that form a rosette. The plant has leafless flower stalks and hairy bracts (leaflike structures) below the flower heads.",
  amount:"R 585",
  image:"https://i.postimg.cc/GmjsBN2t/daisy.jpg",
},
{
  id:7,
  species:"Sunflower",
  description:"The 'flower' of the common sunflower is actually a pseudanthium, or flowerhead, made up of many small flowers",
  amount:"R 214",
  image:"https://i.postimg.cc/Pryt1kmg/sun.jpg",
},
{
  id:8,
  species:"Jasmine",
  description:"The white, yellow, or rarely pink flowers are tubular with a flaring, lobed, pinwheel-like form.",
  amount:"R 200",
  image:"https://i.postimg.cc/0jZLKPLZ/jasmine.jpg",
}];

localStorage.setItem('plants', JSON.stringify(plants));

function loadData() {
  let plants
  if(localStorage.getItem('plants') == null) {
    plants = [];
  }else {
    plants = JSON.parse(localStorage.getItem('plants'))
  }

  let display = document.getElementById('tableContent')
  // clear items
  display.innerHTML = "";
  // displaying on html
  console.log(plants);
  plants.forEach((item) => {
      display.innerHTML += `
      <tr>
          <td scope="row">${item.id}</td>
          <td>${item.species}</td>
          <td>${item.description}</td>
          <td><img src="${item.image}"></img></td>
          <td>${item.amount}</td>
          <td><button class="btn btn-primary" onclick="editItem(${item.id})" data-bs-toggle="modal" data-bs-target="#edit-${item.id}">Edit</button></td>
          <td><button class="btn btn-primary" id="delete" onclick="deletePlants()">Delete</i></td>
      </tr>

      <div class="modal fade" id="edit-${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel" style="margin-left:6rem;">Edit ${item.species}
                  </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form id="form">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">ID</label>
                      <input type="number " class="form-control" id="title-input">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Species</label>
                      <input type="text" class="form-control" id="species-input">
                    </div>
      
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Description</label>
                      <input type="text" class="form-control" id="description">
                    </div>
      
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Image</label>
                      <input class="form-control" type="text" id="imgUrl">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Amount</label>
                      <input type="number" class="form-control" id="amount">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" id="add-btn" onclick="editItemPage()">Edit</button>
                </div>
              </div>
            </div>
          </div>
      `
  })
}

document.onload = loadData();

function addItemPage(){
    let id = document.querySelector('#id-input').value;
    let species = document.querySelector('#species-input').value
    let description = document.querySelector('#description').value
    let image = document.querySelector('#imgUrl').value
    let amount = document.querySelector('#amount').value

    let plants
    if(localStorage.getItem('plants') == null) {
      plants = [];
    }else {
      plants = JSON.parse(localStorage.getItem('plants'))
    }

  plants.push({
      id: id,
      species: species,
      description: description,
      image: image,
      amount: amount
      })

      localStorage.setItem('plants', JSON.stringify(plants));
      loadData();

      document.querySelector('#species-input').value = ''; 
      document.querySelector('#description').value = ''; 
      document.querySelector('#imgUrl').value = ''; 
      document.querySelector('#amount').value = '';       
}
function darkMode() {
  if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white";
  } else {
      document.body.style.backgroundColor = "black";
  }
  console.log(document.body.style.backgroundColor);   // ctrl + j and you can see which mode you're in
}







