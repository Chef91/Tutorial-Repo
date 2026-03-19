// Minor Loot Table - Platinum
const platinumTable = {
  1:  { min: 0, max: 0 },
  2:  { min: 0, max: 1 },
  3:  { min: 0, max: 2 },
  4:  { min: 0, max: 3 },
  5:  { min: 1, max: 4 },
  6:  { min: 1, max: 6 },
  7:  { min: 2, max: 8 },
  8:  { min: 3, max: 10 },
  9:  { min: 4, max: 12 },
  10: { min: 5, max: 15 },
  11: { min: 6,  max: 18 },
  12: { min: 8,  max: 22 },
  13: { min: 10, max: 26 },
  14: { min: 12, max: 30 },
  15: { min: 15, max: 35 },
  16: { min: 18, max: 42 },
  17: { min: 22, max: 50 },
  18: { min: 28, max: 60 },
  19: { min: 35, max: 75 },
  20: { min: 45, max: 90 }
}
// Minor Loot Table - Gold
const goldTable = {
  1:  { min: 5,   max: 15 },
  2:  { min: 10,  max: 25 },
  3:  { min: 15,  max: 40 },
  4:  { min: 25,  max: 60 },
  5:  { min: 40,  max: 90 },
  6:  { min: 60,  max: 130 },
  7:  { min: 80,  max: 180 },
  8:  { min: 110, max: 240 },
  9:  { min: 150, max: 300 },
  10: { min: 200, max: 400 },
  11: { min: 275, max: 525 },
  12: { min: 350, max: 650 },
  13: { min: 450, max: 800 },
  14: { min: 600, max: 1000 },
  15: { min: 800, max: 1300 },
  16: { min: 1000, max: 1700 },
  17: { min: 1300, max: 2200 },
  18: { min: 1700, max: 2800 },
  19: { min: 2200, max: 3600 },
  20: { min: 3000, max: 5000 }
};
// Minor Loot Table - Silver
const silverTable = {
  1:  { min: 10,  max: 40 },
  2:  { min: 20,  max: 60 },
  3:  { min: 30,  max: 90 },
  4:  { min: 50,  max: 130 },
  5:  { min: 75,  max: 175 },
  6:  { min: 100, max: 225 },
  7:  { min: 130, max: 300 },
  8:  { min: 170, max: 375 },
  9:  { min: 225, max: 450 },
  10: { min: 300, max: 550 },
  11: { min: 350, max: 650 },
  12: { min: 425, max: 775 },
  13: { min: 500, max: 900 },
  14: { min: 600, max: 1050 },
  15: { min: 725, max: 1200 },
  16: { min: 875, max: 1400 },
  17: { min: 1050, max: 1650 },
  18: { min: 1250, max: 2000 },
  19: { min: 1500, max: 2400 },
  20: { min: 1800, max: 3000 }
};
// Minor Loot Table - Copper
const copperTable = {
  1:  { min: 50,   max: 150 },
  2:  { min: 75,   max: 250 },
  3:  { min: 100,  max: 400 },
  4:  { min: 150,  max: 600 },
  5:  { min: 200,  max: 800 },
  6:  { min: 300,  max: 1100 },
  7:  { min: 400,  max: 1500 },
  8:  { min: 500,  max: 2000 },
  9:  { min: 700,  max: 2600 },
  10: { min: 900,  max: 3300 },
  11: { min: 1100, max: 4000 },
  12: { min: 1400, max: 5000 },
  13: { min: 1700, max: 6000 },
  14: { min: 2100, max: 7500 },
  15: { min: 2600, max: 9000 },
  16: { min: 3200, max: 11000 },
  17: { min: 4000, max: 14000 },
  18: { min: 5000, max: 17500 },
  19: { min: 6500, max: 22000 },
  20: { min: 8000, max: 28000 }
};
// Combine Loot
const minorLoot = {
  copper: copperTable,
  silver: silverTable,
  gold: goldTable,
  platinum: platinumTable
};
// Function - roll helper
function rollRange(min, max)  {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function - rolling generator
function generateMinorLoot(level)  {
  const copper = minorLoot.copper[level];
  const silver = minorLoot.silver[level];
  const gold = minorLoot.gold[level];
  const platinum = minorLoot.platinum[level];

  return  {
    copper: rollRange(copper.min, copper.max),
    silver: rollRange(silver.min, silver.max),
    gold: rollRange(gold.min, gold.max),
    platinum: rollRange(platinum.min, platinum.max)
  };
}

const loot = generateMinorLoot(10);
console.log("Minor Loot Roll:", loot);

const levelSelect = document.getElementById("levelSelect");
const rollButton = document.getElementById("rollButton");
const lootResult = document.getElementById("lootResult");

rollButton.addEventListener("click", function () {
  const selectedLevel = Number(levelSelect.value);
  const loot = generateMinorLoot(selectedLevel);

  lootResult.innerHTML = `
    <h2>Minor Loot Roll</h2>
    <p><strong>Level:</strong> ${selectedLevel}</p>
    <p><strong>Copper:</strong> ${loot.copper}</p>
    <p><strong>Silver:</strong> ${loot.silver}</p>
    <p><strong>Gold:</strong> ${loot.gold}</p>
    <p><strong>Platinum:</strong> ${loot.platinum}</p>
  `;
});