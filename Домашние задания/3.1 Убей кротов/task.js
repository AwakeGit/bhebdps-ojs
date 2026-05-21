const deadEl = document.getElementById('dead');
const lostEl = document.getElementById('lost');
const holes = Array.from(document.querySelectorAll('.hole'));
let dead = 0;
let lost = 0;

function resetGame() {
  dead = 0;
  lost = 0;
  deadEl.textContent = '0';
  lostEl.textContent = '0';
}

holes.forEach(function (hole) {
  hole.addEventListener('click', function () {
    if (hole.classList.contains('hole_has-mole')) {
      dead += 1;
      deadEl.textContent = dead;
      if (dead >= 10) {
        alert('Победа! Убито кротов: ' + dead);
        resetGame();
      }
    } else {
      lost += 1;
      lostEl.textContent = lost;
      if (lost >= 5) {
        alert('Поражение! Промахов: ' + lost);
        resetGame();
      }
    }
  });
});
