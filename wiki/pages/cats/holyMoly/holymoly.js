
const thingName= [ // our information
    'Basil'
    
];
 
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * thingName.length); //do some math 
    return thingName[randomIndex];
  }
 
function loadText() {
  const myDiv = document.getElementById('name'); // find an html text element with our id in it
  myDiv.innerHTML= getRandomText(); // load our text into this element
}
 
window.onload = loadText; // load in our text when the window loads

//example: <p id="name"></p>
// this works with any text :D