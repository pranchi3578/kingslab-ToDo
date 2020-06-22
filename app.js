const list = document.getElementById("list");
const add = document.getElementById("adds");

list.addEventListener("click", function (event) {
  if (event.target.attributes.id.value == "add") addToDo(event.target);
  else if (event.target.attributes.id.value == "remove")
    removeToDo(event.target);
});

function addToDo(event) {
  const container = event.parentNode;
  const newele = `<div class="container">
      <input type="text" id="fname" name="fname" />
      <button type="button " id="add" onclick="addToDo()">
        Add
      </button>
      <button type="button " id="remove" onclick="removeToDo()">
        remove
      </button>
    </div>`;

  const position = "afterend";

  container.insertAdjacentHTML(position, newele);
}

function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}
