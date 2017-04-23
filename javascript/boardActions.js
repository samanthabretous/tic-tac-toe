const BoardActions = ((Board, Game, RenderSVG) => {
  /**
  * re render entire board each time the board is clicked
  * render board base on the state to keep one source of truth
  */
  const renderBoard = () => {
    const newBoard = document.createElement('section');
    newBoard.id = 'board-js';
    newBoard.classList.add('board');
    Board.getBoard().forEach((color, index) => {
      newBoard.appendChild(RenderSVG.init(color, index));
    });
    // replace the old board with the newly generated new board and re-add the listener
    const oldBoard = document.getElementById('board-js');
    const parentDiv = oldBoard.parentNode;
    parentDiv.replaceChild(newBoard, oldBoard);
    document.getElementById('board-js').addEventListener('click', handleClick)
  };
  const handleClick = (event) => {
    const { classList, id } = event.target;
    const player = Board.getPlayer();
    // make sure a player has not clicked on the square yet
    if (classList[1] === 'red' || classList[1] === 'blue') return;
    Board.updateBoard(id);
    determineWinner(player);
    renderBoard();
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
        console.log('horizontal winner');
        Game.showWinner(player);
    // vertical winner
    } else if (checkThree(0,3,6,player) ||
      checkThree(1,4,7,player) ||
      checkThree(2,5,8,player)) {
        console.log('vertical winner');
        Game.showWinner(player);
    // diagonal winner
    } else if (checkThree(0,4,8,player) ||
      checkThree(2,4,6,player)) {
        console.log('dia winner');
        Game.showWinner(player);
    }
  }
  return {
    renderBoard,
    init() {
      renderBoard();
      document.getElementById('board-js').addEventListener('click', handleClick)
    },
  }
})(Board, Game, RenderSVG);
