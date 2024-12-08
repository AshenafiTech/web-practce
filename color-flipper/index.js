const body = document.getElementsByTagName('body')[0];

body.style.backgroundColor = 'red';

function setColor(color) {
  body.style.backgroundColor = color;
}


function setRandomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
}