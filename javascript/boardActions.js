const BoardActions = ((Board, RenderSVG, Game) => {
  /**
  * re render entire board each time the board is clicked
  * render board base on the state to keep one source of truth
  */
  const renderBoard = (lastClicked) => {
    const newBoard = document.createElement('div');
    newBoard.id = 'board-js';
    newBoard.classList.add('board');
    Board.getBoard().forEach((color, index) => {
      newBoard.appendChild(RenderSVG.init(color, index, lastClicked));
    });
    // replace the old board with the newly generated new board and re-add the listener
    const oldBoard = document.getElementById('board-js');
    const parentDiv = oldBoard.parentNode;
    parentDiv.replaceChild(newBoard, oldBoard);
    document.getElementById('board-js').addEventListener('click', handleClick)
  };
  const handleClick = (event) => {
    const { classList, id } = event.target;
    const player = Game.getPlayer();
    // make sure a player has not clicked on the square yet
    if (classList[1] === 'red' || classList[1] === 'blue') return;
    Board.updateBoard(id);
    renderBoard(id);
    if (Board.getBoard().includes(null)) {
      determineWinner(player);
    } else {
      // game is a draw
      Game.showWinner();
    }
  };
  const checkThree = (position1, position2, position3, player) => {
    const board = Board.getBoard();
    return board[position1] === player &&
      board[position2] === player &&
      board[position3] === player;
  }
  const determineWinner = (player) => {
    // horizontal winner
    if (checkThree(0,1,2,player) ||
      checkThree(3,4,5,player) ||
      checkThree(6,7,8,player)) {
        Game.showWinner(player);
    // vertical winner
    } else if (checkThree(0,3,6,player) ||
      checkThree(1,4,7,player) ||
      checkThree(2,5,8,player)) {
        Game.showWinner(player);
    // diagonal winner
    } else if (checkThree(0,4,8,player) ||
      checkThree(2,4,6,player)) {
        Game.showWinner(player);
    }
  }
  const handleReset = () => {
    Board.resetBoard();
    Game.setPlayer('red');
    const winner = document.getElementById('show_winner-js');
    winner.classList.remove('show');
    const board = document.getElementById('board-js');
    board.classList.remove('hide');
    renderBoard();
    // remove SVG from winner
    const svgContainer = document.querySelector('#show_winner-js figure');
    const svg = document.querySelector('#show_winner-js figure svg');
    if (svg) svgContainer.removeChild(svg);
  };
  return {
    renderBoard,
    init() {
      renderBoard();
      document.getElementById('board-js').addEventListener('click', handleClick)
      document.getElementById('restart-js').addEventListener('click', handleReset);
    },
  }
})(Board, RenderSVG, Game);
