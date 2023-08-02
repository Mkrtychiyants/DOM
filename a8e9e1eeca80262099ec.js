// TODO: write code here

class Game {
  constructor(element) {
    this.element = element;
  }
  generatePosition() {
    const newPosition = Math.floor(Math.random() * this.element.children.length);
    if (newPosition === this.occupiedCell) {
      return this.generatePosition();
    }
    return newPosition;
  }
  deleteActive() {
    for (const iterator of this.element.children) {
      iterator.textContent = "";
    }
  }
  oneRound() {
    this.deleteActive();
    const newImg = document.createElement("img");
    newImg.className = "character";
    const act = this.generatePosition();
    this.element.children[act].appendChild(newImg);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector("ul.board"));
  setInterval(() => {
    game.oneRound();
  }, 2000);
});