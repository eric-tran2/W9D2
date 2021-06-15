const Board = require("../ttt_node/board");

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const ul = document.createElement('ul');
    ul.setAttribute("class", "li-container");
    this.el.appendChild(ul);

    const lis = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    lis.forEach(pos => {
      const li = document.createElement("li");
      li.setAttribute("data-id", pos);
      li.setAttribute("data-show", true);
      ul.appendChild(li);
    })
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    ev = e.target;
  }

  makeMove(square) {
    const e = JSON.parse(t.dataset.pos);
    const player = this.game.currentPlayer;
    this.game.playMove(e);
    square.classList.add(player);
  }

}
ul = document.querySelector(".li-container");

ul.addEventListener("click", e => {
  if (e.target.tagName === 'LI') {
    handleClick(e);
  }
})
module.exports = View;