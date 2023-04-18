function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changeColorBtn = document.getElementById('change-color-btn');
const body = document.body;

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

changeColorBtn.addEventListener('click', function() {
  body.style.backgroundColor = getRandomColor();
  ctx.fillStyle = getRandomColor();
  ctx.fillRect(10, 10, 100, 100);
});

