'use strict'

const menu__links = document.querySelectorAll('.menu__link');

menu__links.forEach(elem => elem.onclick = showMenu);

function showMenu() {
  const menu_active = document.querySelector('.menu_active');

  if (menu_active !== null) {
    menu_active.classList.toggle('menu_active');
    
    if(this.nextElementSibling) return false;
  }

  if (menu_active !== this.nextElementSibling) {
    this.nextElementSibling.classList.toggle('menu_active');
    return false;
  }
}
