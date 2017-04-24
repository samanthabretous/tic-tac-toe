const Game = ((RenderSVG) => {
  const state = {
    red: {
      element: document.getElementById('player1-js'),
      color: 'red',
      wins: 0,
    },
    blue: {
      element: document.getElementById('player2-js'),
      color: 'blue',
      wins: 0,
    },
    currentPlayer: 'red',
  };

  return {
    getPlayer() {
      return state.currentPlayer;
    },
    setPlayer(color) {
      this.switchPlayer();
      state.currentPlayer = color === 'red'
        ? state.red.color
        : state.blue.color;
      return state.currentPlayer;
    },
    switchPlayer() {
      if (state.currentPlayer === 'red') {
        state.blue.element.classList.add('active');
        state.red.element.classList.remove('active');
        state.currentPlayer = state.blue.color;
      } else {
        state.red.element.classList.add('active');
        state.blue.element.classList.remove('active');
        state.currentPlayer = state.red.color;
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
        svgContainer.appendChild(svg);
        // keep track of how many times the user wins
        state[player].wins++;
        state[player].element.children[1].innerHTML = state[player].wins;
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
  }
})(RenderSVG);
