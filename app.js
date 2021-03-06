// Define UI Variables
const form = document.querySelector("#item-form");
const itemList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-items");
const filter = document.querySelector("#filter");
const itemInput = document.querySelector("#item");
const label = document.querySelector("label");

// Load Event Listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addItem);
  itemList.addEventListener("click", removeItem);
  itemList.addEventListener("click", markComplete);
  clearBtn.addEventListener("click", clearComplete);
  filter.addEventListener("keyup", filterItems);
}

//addItem
function addItem(e) {
  // Create li item
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(itemInput.value));
  // Create delete button
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  link.style.color = "red";
  link.style.cursor = "pointer";
  // Add to list
  li.appendChild(link);
  itemList.appendChild(li);
  // Reset input text from error message
  if (label.innerHTML === "Input cannot be empty") {
    label.innerHTML = "New Item";
    label.className = "normal";
  }
  // Empty submission error handling
  if (itemInput.value === "") {
    label.innerHTML = "Input cannot be empty";
    label.className = "errorMessage";
    itemList.lastChild.remove();
  }
  // Clear Input
  itemInput.value = "";
  // Prevent form submission to allow for client side changes
  e.preventDefault();
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

function markComplete(e) {
  if (e.target.classList.contains("collection-item")) {
    e.target.classList.toggle("completed");
  }
}

function clearComplete() {
  let completed = document.querySelectorAll(".completed");
  completed.forEach(function (complete) {
    complete.remove();
  });
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  console.log(e.target.value);
  document.querySelectorAll(".collection-item").forEach(function (item) {
    console.log(itemList);
    const target = item.firstChild.textContent;
    if (target.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
