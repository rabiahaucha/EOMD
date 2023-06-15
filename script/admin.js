

const addBtn = document.querySelector('#add-btn');
const editBtn = document.querySelector('#editBtn')
const featuredPosts = [];
let deleteButtons;
let speciessorting = document.querySelector('#speciessort');
let amountsorting = document.querySelector('#amountsort');
let plants = JSON.parse(localStorage.getItem('plants'))
// localStorage.setItem('plants', JSON.stringify(plants));
function loadData(plants) {
  // if(localStorage.getItem('plants') == null) {
  //   plants = [];
  // }else {
  //   plants = JSON.parse(localStorage.getItem('plants'))
  // }
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
          <td><img src="${item.image}" style="width:10rem;"></img></td>
          <td>R${item.amount}</td>
          <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit-${item.id}"><ion-icon name="add-circle"></ion-icon></button></td>
          <td><button class="btn btn-primary" id="delete" onclick='delIPlant(${JSON.stringify(item.id)})'>Delete</i></td>
      </tr>
      <div class="modal fade" id="edit-${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel" style="margin-left:6rem;">Edit on Purple Plantation ${item.species}
                  </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form id="form">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">ID</label>
                      <input type="number" value="${item.id}" class="form-control" id="title-input${item.id}">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Species</label>
                      <input type="text" class="form-control" value="${item.species}" id="species-input${item.id}">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Description</label>
                      <input type="text" class="form-control" value="${item.description}" id="description${item.id}">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Image</label>
                      <input class="form-control" value="${item.image}" type="text" id="imgUrl${item.id}">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Amount</label>
                      <input type="number" value="${item.amount}" class="form-control" id="amount${item.id}">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" id="add-btn" onclick='new EditPlants(${JSON.stringify(item)})'>Edit</button>
                </div>
              </div>
            </div>
          </div>
      `
  })
}

// loadData(plants)
document.onload = loadData(plants);
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
      loadData(plants);
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

function delIPlant(id) {
  plants = plants.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("plants", JSON.stringify(plants));

  loadData(plants);
}

function EditPlants(item){
  location.reload()
  let plantID = plants.findIndex( a=>{
      return a.id == item.id
  })
  this.id = item.id
  this.species = document.querySelector(`#species-input${item.id}`).value
  this.amount = document.querySelector(`#amount${item.id}`).value
  this.image = document.querySelector(`#imgUrl${item.id}`).value
  this.description = document.querySelector(`#description${item.id}`).value
  plants[plantID] = Object.assign({}, this)
  localStorage.setItem('plants', JSON.stringify(plants))
  // loadData()
}

// sort type dropdown
function typeSort(e) {
  const type = e.target.value;
  if (type === "all") {
      return loadData(plants)
  }
  console.log(typeof type);
  const filtered = plants.filter((item) => item.type == type);
  return loadData(filtered);
}
// textSearch
const textSearch = (e) => {
  const description = e.target.value;
  const filteredItems = plants.filter((item) => {
   return item.species.toLowerCase().includes(description.toLowerCase())

  });
  console.log(filteredItems)
  loadData(filteredItems);
};
// sort price dropdown
function priceSort(e) {
  const type = e.target.value;
  if (type === "all") {
      return loadData(plants)
  }
  console.log(typeof type);
  const filtered = plants.filter((item) => item.amount == type);
  return loadData(plants);
}













