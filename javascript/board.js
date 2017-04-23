const Board = (() => {
  const emptyBoard = [null, null, null, null, null, null, null, null, null];
  const state = {
    board: emptyBoard,
    player: 'red'
  };
  return {
    getPlayer() {
      return state.player;
    },
    switchPlayer() {
      state.player = state.player === 'red' ? 'blue' : 'red';
      return state.player;
    },
    getBoard() {
      return state.board;
    },
    resetBoard() {
      state.board = emptyBoard;
      state.player = 'red';
    },
    updateBoard(index) {
      state.board[index] = state.player;
      this.switchPlayer()
    },
    init() {
    },
  }
})()
