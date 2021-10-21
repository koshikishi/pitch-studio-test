function initAccordion() {
  const accordionItems = document.querySelectorAll('.product__delivery-term');
  const accordionItemTexts = document.querySelectorAll('.product__delivery-text');
  const accordionItemTextHeights = [];

  for (let i = 0; i < accordionItems.length; i++) {
    accordionItemTexts[i].style.height = 'auto';
    accordionItemTextHeights.push(accordionItemTexts[i].offsetHeight);
    accordionItemTexts[i].style.removeProperty('height');

    accordionItems[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      if (evt.target.closest('.product__delivery-button')) {
        this.classList.toggle('product__delivery-term--opened');

        if (accordionItemTexts[i].style.height) {
          accordionItemTexts[i].style.removeProperty('height');
        } else {
          accordionItemTexts[i].style.height = `${accordionItemTextHeights[i]}px`;
        }
      }
    });
  }
}

export default initAccordion;
