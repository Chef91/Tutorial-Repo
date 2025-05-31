
window.onload = function() {
  setGame();
}

function setGame() {
  for (let i =0; i < 9; i++) {
    let title = document.createElement("div");
    title.id = i.toString();
  }
}