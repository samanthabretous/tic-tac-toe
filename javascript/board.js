const Board = ((Game) => {
  const emptyBoard = [null, null, null, null, null, null, null, null, null];
  const state = {
    board: emptyBoard.slice(),
  };
  return {
    getBoard() {
      return state.board;
    },
    resetBoard() {
      state.board = emptyBoard.slice();
      state.player = 'red';
    },
    updateBoard(index) {
      state.board[index] = Game.getPlayer();
      Game.switchPlayer();
    },
    init() {
    },
  }
})(Game)
