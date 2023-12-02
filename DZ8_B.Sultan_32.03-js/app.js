let square = document.getElementById('colorSquare')
function getRandomColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16)
  }
  return color
}
function handleColorChange() {
  let randomColor = getRandomColor()
  square.style.backgroundColor = randomColor
  square.innerText = randomColor
}
square.addEventListener('click', handleColorChange)