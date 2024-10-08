document.getElementsByClassName('color')[0].style.backgroundColor = 'black';

function randomColor() {
  const randomNumber = Math.floor(Math.random() * 256);
  const randomNumber2 = Math.floor(Math.random() * 256);
  const randomNumber3 = Math.floor(Math.random() * 256);
  return `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`;
}
document.getElementsByClassName('color')[1].style.backgroundColor = randomColor();
document.getElementsByClassName('color')[2].style.backgroundColor = randomColor();
document.getElementsByClassName('color')[3].style.backgroundColor = randomColor();
// teste

const color = document.getElementsByClassName('color');

function removeSelectedClass() {
  for (let index = 0; index < color.length; index += 1) {
    if (color[index].classList.value === 'color selected') {
      color[index].className = 'color';
    }
  }
}

function changeSelectedClass(event) {
  removeSelectedClass();
  event.target.classList.add('selected');
}

color[0].addEventListener('click', changeSelectedClass);
color[1].addEventListener('click', changeSelectedClass);
color[2].addEventListener('click', changeSelectedClass);
color[3].addEventListener('click', changeSelectedClass);

function createBoard(size) {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < size; index += 1) {
    const lines = document.createElement('div');
    lines.className = 'line';
    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixels = document.createElement('div');
      pixels.className = 'pixel';
      lines.appendChild(pixels);
    }
    board.appendChild(lines);
  }
}
createBoard(5);

const pixel = document.getElementsByClassName('pixel');
const board = document.getElementById('pixel-board');

function changeColorPixel(event) {
  const colorOfSelectedClass = document.getElementsByClassName('selected')[0].style.backgroundColor;
  const clickedPixel = event.target;
  if (clickedPixel.className === 'pixel') {
    clickedPixel.style.backgroundColor = colorOfSelectedClass;
  }
  console.log(clickedPixel);
}
board.addEventListener('click', changeColorPixel);


function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clearBoard);

// 10

const sizeButton = document.getElementById('generate-board');
const input = document.getElementById('board-size');

function resetBoard() {
  board.innerHTML = '';
}

function changeBoardSize() {
  resetBoard();
  if (input.value === '') {
    alert('Board inválido!');
  } else if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
  createBoard(input.value);
  document.querySelector('input').value = '';
}
sizeButton.addEventListener('click', changeBoardSize);
