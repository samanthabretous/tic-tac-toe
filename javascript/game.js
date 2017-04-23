const Game = ((Board) => {
  const state = {
    player1: document.getElementById('player1-js'),
    player2: document.getElementById('player2-js'),
  };
  const handleReset = () => {
    Board.resetBoard();
    // console.log(Board);
    // Board.renderBoard();
  };
  return {
    showWinner() {

    },
    init() {
      console.log(state.player1)
      document.getElementById('restart-js').addEventListener('click', handleReset);
    },
  }
})(Board);
