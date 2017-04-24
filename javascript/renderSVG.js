const RenderSVG = (() => {
  const svgNS = 'http://www.w3.org/2000/svg';
  const createSVG = () => {
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute('x', '0px');
    svg.setAttribute('y', '0px');
    svg.setAttribute('width', '103px');
    svg.setAttribute('height', '102.833px');
    svg.setAttribute('viewBox', '0 0 103 102.833');
    svg.setAttribute('enable-background', 'new 0 0 103 102.833');
    svg.setAttribute('xml:space', 'preserve');
    return svg;
  };
  const createCircle = () => {
    const svg = createSVG();

    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttributeNS(null, 'fill', 'none');
    circle.setAttributeNS(null, 'stroke', '#08386D');
    circle.setAttributeNS(null, 'stroke-width', '14');
    circle.setAttributeNS(null, 'stroke-miterlimit', '10');
    circle.setAttributeNS(null, 'cx', '51.625');
    circle.setAttributeNS(null, 'cy', '51.417');
    circle.setAttributeNS(null, 'r', '43.607');

    svg.appendChild(circle);
    return svg;
  };
  const createX = () => {
    const svg = createSVG();

    const line1 = document.createElementNS(svgNS, 'line');
    line1.setAttributeNS(null, 'stroke', '#78FFD6');
    line1.setAttributeNS(null, 'stroke-width', '14');
    line1.setAttributeNS(null, 'stroke-miterlimit', '10');
    line1.setAttributeNS(null, 'x1', '5.65');
    line1.setAttributeNS(null, 'y1', '5.56');
    line1.setAttributeNS(null, 'x2', '97.482');
    line1.setAttributeNS(null, 'y2', '97.392');
    line1.classList.add('line1');

    const line2 = document.createElementNS(svgNS, 'line');
    line2.setAttributeNS(null, 'stroke', '#78FFD6');
    line2.setAttributeNS(null, 'stroke-width', '14');
    line2.setAttributeNS(null, 'stroke-miterlimit', '10');
    line2.setAttributeNS(null, 'x1', '97.482');
    line2.setAttributeNS(null, 'y1', '5.56');
    line2.setAttributeNS(null, 'x2', '5.65');
    line2.setAttributeNS(null, 'y2', '97.392');
    line2.classList.add('line2');

    svg.appendChild(line1);
    svg.appendChild(line2);
    return svg;
  };
  return {
    winner(player) {
      if(player === 'red') {
        const svg = createX();
        return svg;
      } else {
        const svg = createCircle();
        return svg;
      }
    },
    // insert svg based on player
    init(color, index, lastClicked) {
      const square = document.createElement('button');
      if (color === 'red') {
        const svg = createX();
        square.appendChild(svg)
      } else if (color === 'blue') {
        const svg = createCircle();
        square.appendChild(svg)
      }
      // stop from re-animating all squares
      if(lastClicked == index && !index) square.classList.add('animate');

      square.classList.add('square', color);
      square.id = index;
      return square;
    }
  }
})();
