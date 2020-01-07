let elements = []
var addButton = document.getElementById("add_button");
var tableRow = document.getElementsByClassName("row");
let priorityButton = document.getElementsByClassName("priority_button");
let completeButton = document.getElementsByClassName("complete_button");
let removeButton = document.getElementsByClassName("remove_button");
let listItem = document.getElementsByClassName("to_do")

let element_prioritize;

window.onload = function() {
  document.getElementById("table").onmouseover = startup;
}

const create_item = function() {
  let input = document.getElementById("input_item").value;
  if (input === "") {
