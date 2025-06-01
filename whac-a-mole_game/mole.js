let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
  setGame();
}
// set up grid for the game board in html
function setGame() {
  for (let i =0; i < 9; i++) {  // This is creating a 3x3 area on the soil map
    let tile = document.createElement("div"); // This Creates the divs
    tile.id = i.toString();
    tile.addEventListener("click", selectTile) // Add event - mouse click
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 800) // 800 Mil sec. = 0.8 sec.
  setInterval(setPlant, 2500) // 2000 Mil sec. = 2.5 sec.
}
// Tile picking Function
function getRandomTile() { // This function is picking random numbers between 0-9
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}
// Mole Function
function setMole() {
   if (gameOver) { // Game Over
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "" // Clears div tag - stops stacking
  }

  let mole = document.createElement("img"); // Creates an image
  mole.src = "./monty-mole.png"

  let num = getRandomTile(); // Selects a random tile
  if (currPlantTile && currPlantTile.id == num) {
    return; // Tells the random selector to skip if plant
  }
  currMoleTile = document.getElementById(num); // picks random div tag
  currMoleTile.appendChild(mole); // produces an image
}
// Plant function
function setPlant() {
    if (gameOver) { // Clicking plant = Game Over
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "" // Clears div tag - stops stacking
  }

  let plant = document.createElement("img"); // Creates an image
  plant.src = "./piranha-plant.png"

  let num = getRandomTile(); // Selects a random tile
    if (currMoleTile && currMoleTile.id == num) {
    return; // Tells the random selector to skip if Mole
  }
  currPlantTile = document.getElementById(num); // picks random div tag
  currPlantTile.appendChild(plant); // produces an image
}
// Clicking Function
function selectTile() {
    if (gameOver) { // Game Over
    return;
  }
  if (this == currMoleTile) {
    score += 10; // By 10 points
    document.getElementById("score").innerText = score.toString(); // Updates the score
  }
  if (this == currPlantTile) {
    document.getElementById("score").innerText = "GAME OVER: " + score.toString();
    gameOver = true;
  }
}