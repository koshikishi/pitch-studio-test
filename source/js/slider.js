function initSlider() {
  const slides = document.querySelectorAll('.slider__slide');
  const sliderButtonPrev = document.querySelector('.slider__button--prev');
  const sliderButtonNext = document.querySelector('.slider__button--next');
  const sliderPaginationCurrent = document.querySelector('.slider__pagination-current');
  const sliderPaginationTotal = document.querySelector('.slider__pagination-total');

  let slideActiveIndex = Array.from(slides).findIndex((slide) => slide.classList.contains('slider__slide--active'));

  sliderPaginationCurrent.textContent = String(slideActiveIndex + 1).padStart(2, '0');
  sliderPaginationTotal.textContent = String(slides.length).padStart(2, '0');

  const toNextSlide = () => {
    slides[slideActiveIndex].classList.remove('slider__slide--active');

    slideActiveIndex = (slideActiveIndex + 1 >= slides.length) ? 0 : slideActiveIndex + 1;

    slides[slideActiveIndex].classList.add('slider__slide--active');
    sliderPaginationCurrent.textContent = String(slideActiveIndex + 1).padStart(2, '0');
  };

  const toPrevSlide = () => {
    slides[slideActiveIndex].classList.remove('slider__slide--active');

    slideActiveIndex = (slideActiveIndex - 1 < 0) ? slides.length - 1 : slideActiveIndex - 1;

    slides[slideActiveIndex].classList.add('slider__slide--active');
    sliderPaginationCurrent.textContent = String(slideActiveIndex + 1).padStart(2, '0');
  };

  sliderButtonPrev.addEventListener('click', toPrevSlide);
  sliderButtonNext.addEventListener('click', toNextSlide);
}

export default initSlider;
