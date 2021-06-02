document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'lightGreen';
document.getElementsByClassName('color')[2].style.backgroundColor = 'lightSkyBlue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'lightPink';

const color = document.getElementsByClassName('color');

function removeSelectedClass() {
  for (let index = 0; index < color.length; index += 1) {
    if (color[index].classList.value === 'color selected') {
      color[index].className = 'color';
    }
  }
}

function changeSelectedClass(click) {
  removeSelectedClass();
  click.target.classList.add('selected');
}

const pixel = document.getElementsByClassName('pixel');
const board = document.getElementById('pixel-board');

color[0].addEventListener('click', changeSelectedClass);
color[1].addEventListener('click', changeSelectedClass);
color[2].addEventListener('click', changeSelectedClass);
color[3].addEventListener('click', changeSelectedClass);

function changeColorPixel(event) {
  const colorOfSelectedClass = document.getElementsByClassName('selected')[0].style.backgroundColor;
  const clickedPixel = event.target;
  clickedPixel.style.backgroundColor = colorOfSelectedClass;
}
board.addEventListener('click', changeColorPixel);

function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clearBoard);
