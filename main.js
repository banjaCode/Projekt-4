"use strict";

// todolist
let todosMåndag = [];
let todosTisdag = [];
let todosOnsdag = [];
let todosTorsdag = [];
let todosFredag = [];
let todosLördag = [];
let todosSöndag = [];
let todosDagar = [
  todosMåndag,
  todosTisdag,
  todosOnsdag,
  todosTorsdag,
  todosFredag,
  todosLördag,
  todosSöndag,
];
let lista = 0;
let listRoot = document.querySelectorAll(".list-root");
let listForm = document.querySelector("[data-list-form]");
let listInput = document.querySelector("[data-list-input]");
let ButtonDag = document.querySelectorAll(".buttonDag");
let förraLista;

for(let i = 0; i < 7; i++){
  ButtonDag[i].addEventListener("click", (e) =>{
    setDay(i);
    changeColor(förraLista);
  } );
  }

listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (listInput.value.trim() === "") {
    return;
  }
  todosDagar[lista].push(listInput.value.trim());
  updateList();
  listInput.value = "";
});

function todoList(items) {
  let list = document.createElement("ul");
  items.forEach((item) => {
    let todoListItem = document.createElement("li");
    todoListItem.innerText = item;
    todoListItem.addEventListener("click", removeItem);
    list.append(todoListItem);
  });
  return list;
}

function removeItem(event) {
  let itemToRemove = event.target.innerText;
  todosDagar[lista] = todosDagar[lista].filter((item) => item !== itemToRemove);
  updateList();
}

function updateList() {
  listRoot[lista].innerHTML = "";
  listRoot[lista].append(todoList(todosDagar[lista]));
}

updateList();

function setDay(day){
förraLista = lista
lista = day
}

function changeColor(förraLista) {
  listRoot[förraLista].style.backgroundColor = "#e5e5e5";
  listRoot[lista].style.backgroundColor = "red";
}

changeColor(0);

