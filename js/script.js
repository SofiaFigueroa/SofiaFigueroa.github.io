function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changeColorBtn = document.getElementById('change-color-btn');
const nav = document.body;

changeColorBtn.addEventListener('click', function() {
  nav.style.backgroundColor = getRandomColor();
});

