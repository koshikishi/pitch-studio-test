function initQuantity() {
  const quantityInput = document.querySelector('.quantity__input');
  const quantityButtonDecrease = document.querySelector('.quantity__button--decrease');
  const quantityButtonIncrease = document.querySelector('.quantity__button--increase');

  quantityButtonDecrease.addEventListener('click', (evt) => {
    evt.preventDefault();

    quantityInput.stepDown();
  });

  quantityButtonIncrease.addEventListener('click', (evt) => {
    evt.preventDefault();

    quantityInput.stepUp();
  });
}

export default initQuantity;
