//Ajout element dans une liste
//afficher la liste
//Supprimer un element de la liste
//Valider une todo
//Editer une todo
import "./style.css";

//GESTION DE L'AJOUT
const frameMainBox = document.querySelector("#frameMain");
const btnPlus = document.querySelector("#addToDo");

let divNumber = 1;

btnPlus.addEventListener("click", () => {
  let divAdd = document.createElement("div");
  let divAddClass = document.createAttribute("class");
  let divAddId = document.createAttribute("id");
  divAddClass.value = "todoElem";
  divAddId.value = "todoElem" + divNumber;
  divAdd.setAttributeNode(divAddClass);
  divAdd.setAttributeNode(divAddId);
  frameMainBox.insertAdjacentElement("beforeend", divAdd);
  divNumber += 1;
});

//GESTION DE LA SUPRESSION
const btnMoins = document.querySelector("#supprToDo");
let removeDiv = document.querySelector(".todoElem");

console.log(divNumber);

btnMoins.addEventListener("click", () => {
  let toRemoveId = "#todoElem" + (divNumber - 1);
  let toRemove = document.querySelector(toRemoveId);
  toRemove.remove();
  divNumber -= 1;
});
