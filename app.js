// Define UI Variables
const form = document.querySelector("#item-form");
const itemList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-items");
const filter = document.querySelector("#filter");
const itemInput = document.querySelector("#item");

// Load Event Listeners
loadEventListeners();
function loadEventListeners() {
  // Add item event
  form.addEventListener("submit", addItem);
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
  // Add to list
  li.appendChild(link);
  itemList.appendChild(li);
  // Empty submission
  if (itemInput.value === "") {
    alert("Empty Input");
    itemList.lastChild.remove();
  }
  // Clear Input
  itemInput.value = "";
  // Prevent form submission to allow for client side changes
  e.preventDefault();
}
