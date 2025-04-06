const textToDisplay = 'Basil';  // The specific text you want to display

function loadText() {
  const myDiv = document.getElementById('name'); // Find the HTML element with id "name"
  myDiv.innerHTML = textToDisplay; // Load the specific text into the element
}