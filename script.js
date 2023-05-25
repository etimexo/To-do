const  inputEl = document.querySelector("#input-el")
const addBtn = document.querySelector("#add-btn")
let listTask = document.querySelector("#lists")
addBtn.addEventListener("click", function () {
  if (inputEl.value === '') {
    alert("You're yet to add a task!")
  } else {
    let li = document.createElement("li")
    li.innerHTML = inputEl.value
    listTask.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputEl.value = ''
  saveList()
})
let delBtn = document.querySelector("#del-btn")
delBtn.addEventListener("click", function() {
  listTask.innerHTML = ''
  localStorage.clear()
})
listTask.addEventListener("click", function(e) {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveList()
  } 
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveList()
  }
}, true)
function saveList () {
  localStorage.setItem("lists", listTask.innerHTML)
}
function showList () {
  listTask.innerHTML = localStorage.getItem("lists")
}
showList()