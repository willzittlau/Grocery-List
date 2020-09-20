// Define UI Variables
const form = document.querySelector('#item-form');
const itemlist = document.querySelector('.collection');
const clearBtn =document.querySelector('.clear-items');
const filter = document.querySelector('#filter');
const itemInput = document.querySelector('#item');

// Load Event Listners
loadEventListeners();

function loadEventListeners() {
  // Add item event
  form.addEventListener('submit', addItem);
}

//addItem
function addItem(e) {
  if (itemInput.value === '') {
    alert('Empty Input');
  }
  e.preventDefault();
}