const buttonsOrder = document.querySelectorAll('.product__button_order');
const btnMore = document.querySelectorAll('.product__button_more');
const overlayOrder = document.querySelector('.overlay_order');
const overlayConsultation = document.querySelector('.overlay_consultation');
const headerConsultation = document.querySelector('.header__consultation');

buttonsOrder.forEach((buttonOrder) => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
    const order = overlayOrder.querySelector('.modal__order');
    order.value = buttonOrder.dataset.order;
  });
});

btnMore.forEach((btn) => {
  btn.addEventListener('click', () => {
    overlayConsultation.classList.toggle('overlay_active');
    const order = overlayOrder.querySelector('.modal__order');
    order.value = btn.dataset.order;
  });
});

overlayOrder.addEventListener('click', ({target}) => {
  if (target === overlayOrder || target.closest('.modal__close')) {
    overlayOrder.classList.toggle('overlay_active');
    document.forms[0].bio.value = '';
    document.forms[0].tel.value = '';
  }
});

overlayConsultation.addEventListener('click', ({target}) => {
  if (target === overlayConsultation || target.closest('.modal__close')) {
    overlayConsultation.classList.toggle('overlay_active');
    document.forms[1].bio.value = '';
    document.forms[1].tel.value = '';
  }
});

headerConsultation.addEventListener('click', () => {
  overlayConsultation.classList.toggle('overlay_active');
});
