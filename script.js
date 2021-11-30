// requisitos obrigatorios
// funcao pintar pixels
function paintPixel(cell) {
  const colorSelected = document.querySelector('.selected');

  // eslint-disable-next-line no-param-reassign
  cell.style.backgroundColor = colorSelected.style.backgroundColor;
}

// funcao criar o board com pixels
const pixelBoard = document.getElementById('pixel-board');
function drawPixelBoard() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.classList.add('linha');

    for (let j = 0; j < 5; j += 1) {
      const cell = document.createElement('div');
      cell.classList.add('pixel');

      line.appendChild(cell);
      // eslint-disable-next-line sonarjs/no-extra-arguments
      cell.addEventListener('click', () => paintPixel(cell));
    }

    pixelBoard.appendChild(line);
  }
}

drawPixelBoard();

// selecionar cor
// acessa a paleta de cores
// pega uma das quatro cores dos quadrados
// ao clicar nos quadradinhos do pixel board
// a cor selecionada irá pintar o que estiver diferente dela
function selectColor(square) { // precisa de elemento para saber quem está selecionando
  // adicionar e remover class
  // colocar if dentro de um for
  // se algum elemento da li tiver a classe selected, remove ao clicar em outro
  // se os filhos do color-palette classList.contains('selected'), entao remove classe
  // selecionar somente um de cada vez - está selecionando todos
  if (square.classList.contains('selected')) {
    square.classList.remove('selected');
  } else {
    square.classList.add('selected');
  }
}

// mudar cor aleatória
// consultei código de aleatoriedade de Cores
// Link: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
function randomColor() {
  const randomColorSquare = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColorSquare; // retornar cor aleatoria
}

// função para criar os quadradinhos de cor e adicionar evento de selecionar cor
const colorPalette = document.querySelector('#color-palette');
function createSquareColorPalette() {
  for (let i = 0; i < 4; i += 1) {
    const square = document.createElement('li');

    if (i === 0) {
      square.classList.add('color', 'black', 'selected');
      square.style.backgroundColor = 'black';
    } else {
      square.classList.add('color');
      square.style.backgroundColor = randomColor();
    }

    colorPalette.appendChild(square);
    square.addEventListener('click', () => selectColor(square));
  }
}
createSquareColorPalette();

// botão limpar cores
const buttonClear = document.querySelector('#clear-board');
function clearButton() {
  const pixel = document.querySelectorAll('.pixel');
  const whiteBackgroundColor = 'white';

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = whiteBackgroundColor;
  }
  // Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco
  // pintar todos os background color dos pixels ou do board
  colorPalette.style.backgroundColor = whiteBackgroundColor;
}

buttonClear.addEventListener('click', clearButton);
