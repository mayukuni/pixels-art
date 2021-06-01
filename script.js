document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[2].style.backgroundColor = 'yellow';
document.getElementsByClassName('color')[3].style.backgroundColor = 'purple';

let color1 = document.getElementsByClassName('color');
color1[0].addEventListener('click', addSelectedClass);
color1[1].addEventListener('click', addSelectedClass);
color1[2].addEventListener('click', addSelectedClass);
color1[3].addEventListener('click', addSelectedClass);

function removeSelectedClass() {
  for (let index = 0; index < color1.length; index += 1) {
    if (color1[index].classList.value == 'color selected') {
      color1[index].className = 'color';
    }
  } 
}

function addSelectedClass(click) {
  removeSelectedClass();
  let selectedColor = document.getElementsByClassName('selected')[0];
  click.target.classList.add('selected');
}



