function initAccordion() {
  const accordionItems = document.querySelectorAll('.product__delivery-term');

  for (const item of accordionItems) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();

      if (evt.target.closest('.product__delivery-button')) {
        this.classList.toggle('product__delivery-term--opened');
      }
    });
  }
}

export default initAccordion;
