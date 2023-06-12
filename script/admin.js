const addBtn = document.querySelector('#add-btn');
const titleInput = document.querySelector('#title-input')
const descInput = document.querySelector('#description')
const contentInput = document.querySelector('#content')
const editBtn = document.querySelector('#editBtn')
const featuredPosts = [];
let id = 1;
const table = document.querySelector('#table-body')
let deleteButtons;
addBtn.addEventListener("click", addItem)

function addItem(e){
    e.preventDefault();
    featuredPosts.push({
        id: id++,
        title: titleInput.value,
        imageUrl:'',
        description: descInput.value,
        content: contentInput.value,
        date: new Date()
        })
        addItemPage()
         localStorage.setItem('featuredPosts',JSON.stringify(featuredPosts));
         
}



// addBtn.addEventListener('click', addItem)

function addItemPage(){
    
    table.innerHTML = ''
    featuredPosts.forEach((details)=>{
        table.innerHTML += 
        `
        <tr>
        <td>${details.id}</td>
        <td>${details.title}</td>
        <td>${details.author}</td>
        <td>${details.description}</td>
        <td>${details.content}</td>
        <td>${details.date}</td>
        <td>${details.image}</td>
        <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit" id="editBtn">
   Edit
  </button>
            <button class="btn btn-primary" onclick="deleteItem()" id="delete">Delete</button>
        </td>
        
      </tr>

      <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel" style="margin-left:10rem;">Create On SKINC</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <form id="form">
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">ID</label>
                      <input type="email" class="form-control" id="title-input" >
                    </div>
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Title</label>
                      <input type="email" class="form-control" id="title-input">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Author</label>
                      <textarea class="form-control" id="content" rows="3"></textarea>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Description</label>
                      <input type="email" class="form-control" id="description">
                    </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Content</label>
                      <textarea class="form-control" id="content" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Date</label>
                      <textarea class="form-control" id="content" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Image</label>
                      <textarea class="form-control" id="content" rows="3"></textarea>
                    </div>
              </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="add-btn">Add</button>
          </div>
        </div>
      </div>
    </div
      
        `
    })

    
}
