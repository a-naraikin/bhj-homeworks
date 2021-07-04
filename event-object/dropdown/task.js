const dropdown = document.querySelector('.dropdown__value');
const dropdownItems = document.querySelectorAll('.dropdown__item');

const dropdownItemsArr = Array.from( dropdownItems );

dropdown.addEventListener('click', showToggleDropdown);

dropdownItemsArr.forEach(item => {
  item.addEventListener('click', changeItem);
});

function showToggleDropdown() {
  dropdown.nextElementSibling.classList.toggle('dropdown__list_active');
};

function changeItem(e) {
  e.preventDefault();
  dropdown.textContent = this.textContent;
  showToggleDropdown();
}