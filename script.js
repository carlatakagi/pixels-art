// mudar cor de cada square
const square1 = document.getElementsByClassName('color')[0];
square1.style.backgroundColor = 'black';

// mudar cor aleatória
// consultei código de aleatoriedade de Cores
// Link: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
function randomColor() {
  const randomColorSquare = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColorSquare; // retornar cor aleatoria
}
const square2 = document.getElementsByClassName('color')[1];
square2.style.backgroundColor = randomColor();

const square3 = document.getElementsByClassName('color')[2];
square3.style.backgroundColor = randomColor();

const square4 = document.getElementsByClassName('color')[3];
square4.style.backgroundColor = randomColor();
