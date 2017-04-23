const Board = (() => {
  const state = {
    board: [null, null, null, null, null, null, null, null, null],
    player: 'x'
  }
  const renderBoard = () => {
    const board = document.getElementById('board-js');
    state.board.forEach(() => {
      const square = document.createElement('div');
      square.classList.add('square');
      board.appendChild(square);
    });
  };
  return {
    getPlayer() {

    },
    getBoard() {

    },
    init() {
      renderBoard();
    }
  }
})()
