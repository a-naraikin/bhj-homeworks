const dropdown = document.querySelector('.dropdown__value');
const dropdownItems = document.querySelectorAll('.dropdown__item');

const dropdownItemsArr = Array.from( dropdownItems );

dropdown.addEventListener('click', showToggleDropdown);
dropdownItemsArr.forEach(item => {
  item.addEventListener('click', changeItem);
  item.firstElementChild.onclick = () => {
    return false;
  };
});

function showToggleDropdown() {
  dropdown.nextElementSibling.classList.toggle('dropdown__list_active');
};

function changeItem() {
  dropdown.textContent = this.textContent;
  showToggleDropdown();
}