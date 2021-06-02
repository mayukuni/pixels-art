document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[2].style.backgroundColor = 'yellow';
document.getElementsByClassName('color')[3].style.backgroundColor = 'purple';

let color1 = document.getElementsByClassName('color');
let selectedColor = document.getElementsByClassName('selected')[0];

color1[0].addEventListener('click', changeSelectedClass);
color1[1].addEventListener('click', changeSelectedClass);
color1[2].addEventListener('click', changeSelectedClass);
color1[3].addEventListener('click', changeSelectedClass);

function removeSelectedClass() {
  for (let index = 0; index < color1.length; index += 1) {
    if (color1[index].classList.value === 'color selected') {
      color1[index].className = 'color';
    }
  } 
}

function changeSelectedClass(click) {
  removeSelectedClass();
  click.target.classList.add('selected');
}

let pixel = document.getElementsByClassName('pixel');
let board = document.getElementById('pixel-board');

function changeColorPixel(event) {
  let colorOfSelectedClass = document.getElementsByClassName('selected')[0].style.backgroundColor
  let clickedPixel = event.target
  clickedPixel.style.backgroundColor = colorOfSelectedClass
} 
board.addEventListener('click', changeColorPixel)

function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  } 
}

let button = document.getElementById('clear-board')
button.addEventListener('click', clearBoard)
