let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.querySelector(".add-toy-form").addEventListener("submit", handleSubmit)

//Event Handlers
function handleSubmit(e){
  e.preventDefault()
  let toyObj ={
    name:e.target.name.value,
    image: e.target.image.value,
  }
  renderToy(toyObj)
  addToy(toyObj)
}

function renderToy(toy){
  //Building a toy
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
  <img scr="${toy.image}" class ="toy avator">
  <div class = "content">
    <h2> ${toy.name} </h2>
      <p> 
      $<span class ="like-count">${toy.likes}</span>
      <p>
      <button class="like-btn" id="[toy_id]">Like ❤️</button>
  </div>
  `
 
  document.querySelector('#toy-collection').appendChild(card)
}
//Adding a toy with PUSH
function addToy(toyObj){
  return fetch("http://localhost:3000/toys", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body:JSON.stringify(toyObj = {
          "name": "Jessie",
          "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
          "likes": 0
        })
      })
      .then(resp => resp.json())
      .then(animal => console.log(animal))
    }
//Making a fetch request
function getToys(){
  fetch ('http://localhost:3000/toys')
  .then (resp => resp.json())
  .then (toysData => toysData.forEach(toy => renderToy(toy)))
}

function initialize(){
  getToys()
}
initialize()

//Making a patch request

function updateLikes (){
  return fetch("http://localhost:3000/toys/:id", {
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "likes": newNumberOfLikes
      
      })
    })
    .then(resp => resp.json())
    .then(animal => console.log(animal))
  }

 document.querySelector('.like-btn').addEventListener('click', () => {
    toy.likes+=1
    document.querySelector('p').textContent = toy.likes + ' likes'
    likes(toy)
  })
