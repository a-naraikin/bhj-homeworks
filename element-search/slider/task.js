'use strict'

const slider__arrow_prev = document.querySelector('.slider__arrow_prev');
const slider__arrow_next = document.querySelector('.slider__arrow_next');

const slider__items = document.querySelectorAll('.slider__item');
const slider__dots = document.querySelectorAll('.slider__dot');

const slider__item_active = 'slider__item_active';
const slider__dot_active = 'slider__dot_active';

const slider__items_length = slider__items.length - 1;
let index = 0;

function showOrCloseSlider(index) {
  slider__items[index].classList.toggle(slider__item_active);
  slider__dots[index].classList.toggle(slider__dot_active);
}

slider__dots[index].classList.toggle(slider__dot_active);

slider__arrow_prev.onclick = () => {
  showOrCloseSlider(index);
  (index === 0) ? index = slider__items_length : index -= 1;
  showOrCloseSlider(index);
}

slider__arrow_next.onclick = () => {
  showOrCloseSlider(index);
  (index === slider__items_length) ? index = 0 : index += 1;
  showOrCloseSlider(index);
}

for (let i = 0; i < slider__dots.length; i++) {
  slider__dots[i].onclick = () => {
    showOrCloseSlider(index);
    index = i;
    showOrCloseSlider(index);
  }
}