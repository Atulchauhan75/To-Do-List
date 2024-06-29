const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let currentItem = null;
listContainer.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'LI') {
        currentItem = event.target;
    }
});
listContainer.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'LI') {
        currentItem = null;
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Delete' && currentItem) {
        currentItem.remove();
        currentItem = null;
    }
});

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
}
// Add event listener to the input box to handle the Enter key
inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
document.addEventListener("DOMContentLoaded", showTask);
// localStorage.clear();
