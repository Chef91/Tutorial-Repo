let currMoleTile;
let currPlantTile;

window.onload = function() {
  setGame();
}
// set up grid for the game board in html
function setGame() {
  for (let i =0; i < 9; i++) {  // This is creating a 3x3 area on the soil map
    let tile = document.createElement("div"); // This Creates the divs
    tile.id = i.toString();
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000) // 1000 Mil sec. = 1 sec.
  setInterval(setPlant, 2000) // 2000 Mil sec. = 2 sec.
}
// Tile picking Function
function getRandomTile() { // This function is picking random numbers between 0-9
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}
// Mole Function
function setMole() {
  if (currMoleTile) {
    currMoleTile.innerHTML = "" // Clears div tag - stops stacking
  }

  let mole = document.createElement("img"); // Creates an image
  mole.src = "./monty-mole.png"

  let num = getRandomTile(); // Selects a random tile
  currMoleTile = document.getElementById(num); // picks random div tag
}
// Plant function
function setPlant() {
  if (curPlantTile) {
    currPlantTile.innerHTML = "" // Clears div tag - stops stacking
  }

  let plant = document.createElement("img"); // Creates an image
  plant.src = "./piranha-plant.png"

  let num = getRandomTile(); // Selects a random tile
  currPlantTile = document.getElementById(num); // picks random div tag
  currPlantTile.appendChild(plant); // produces an image
}