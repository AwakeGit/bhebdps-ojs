const slides = Array.from(document.querySelectorAll('.slider__item'));
const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');
let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove('slider__item_active');
  currentIndex = (index + slides.length) % slides.length;
  slides[currentIndex].classList.add('slider__item_active');
}

prevButton.addEventListener('click', function () {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', function () {
  showSlide(currentIndex + 1);
});
