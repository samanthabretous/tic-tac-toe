const Game = ((RenderSVG) => {
  const player1 = {
    element: document.getElementById('player1-js'),
    color: 'red',
  };
  const player2 = {
    element: document.getElementById('player2-js'),
    color: 'blue',
  };
  const state = {
    winner: null,
    currentPlayer: player1.color,
  };
  const handleReset = () => {
    // state.winner = null;
    // const winner = document.getElementById('show_winner-js');
    // winner.classList.remove('active');
    // BoardActions.newGame();
  };
  return {
    getPlayer() {
      return state.currentPlayer;
    },
    switchPlayer() {
      if (state.currentPlayer === 'red') {
        player2.element.classList.add('active');
        player1.element.classList.remove('active');
        state.currentPlayer = player2.color;
      } else {
        player1.element.classList.add('active');
        player2.element.classList.remove('active');
        state.currentPlayer = player1.color;
      }
      return state.currentPlayer;
    },
    showWinner(player) {
      // switch view -- show winner hide board
      const winner = document.getElementById('show_winner-js');
      winner.classList.add('show');
      const board = document.getElementById('board-js');
      board.classList.add('hide');

      const svgContainer = document.querySelector('#show_winner-js figure');
      if (player) {
        const svg = RenderSVG.winner(player);
        svgContainer.appendChild(svg)
      } else {
        const svg1 = RenderSVG.winner('red');
        const svg2 = RenderSVG.winner('blue');
        svgContainer.appendChild(svg1);
        svgContainer.appendChild(svg2);
      }

      const text = document.querySelector('#show_winner-js p');
      player
        ? text.innerHTML = 'WINNER'
        : text.innerHTML = 'DRAW';
    },
    init() {
      document.getElementById('restart-js').addEventListener('click', handleReset);
    },
  }
})(RenderSVG);
