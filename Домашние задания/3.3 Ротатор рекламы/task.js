const rotators = Array.from(document.querySelectorAll('.rotator'));

function startRotator(rotator) {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let currentIndex = 0;

  function showNext() {
    cases[currentIndex].classList.remove('rotator__case_active');
    currentIndex = (currentIndex + 1) % cases.length;

    const current = cases[currentIndex];
    current.classList.add('rotator__case_active');

    if (current.dataset.color) {
      current.style.color = current.dataset.color;
    }

    setTimeout(showNext, parseInt(current.dataset.speed) || 1000);
  }

  const first = cases[0];
  if (first.dataset.color) {
    first.style.color = first.dataset.color;
  }

  setTimeout(showNext, parseInt(first.dataset.speed) || 1000);
}

rotators.forEach(startRotator);
