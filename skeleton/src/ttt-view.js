const Board = require("../ttt_node/board");

class View {
  constructor(game, el) {}

  setupBoard() {
    const ul = Document.createElement('ul')
    const newBoard = new Board();
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}


module.exports = View;
