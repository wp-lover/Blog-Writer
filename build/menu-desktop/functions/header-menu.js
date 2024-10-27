/******/ (() => { // webpackBootstrap
/*!***************************************************!*\
  !*** ./src/menu-desktop/functions/header-menu.js ***!
  \***************************************************/
document.addEventListener('DOMContentLoaded', () => {
  var gspHeaderMenu = new GspHeaderMenu();
  document.addEventListener('click', e => {
    for (let i = 0; i < gspHeaderMenu.item_parents.length; i++) {
      const element = gspHeaderMenu.item_parents[i];
      if (e.target.tagName == 'A') {
        const li = e.target.parentNode;
        if (li == element) {
          gspHeaderMenu.header_sub_menu(element);
        }
      }
      if (e.target.tagName == 'SPAN') {
        const aTag = e.target.parentNode;
        if (aTag.parentNode == element) {
          gspHeaderMenu.header_sub_menu(element);
        }
      }
    }
  });
});
class GspHeaderMenu {
  constructor() {
    this.menuContainer = document.getElementById('gsp-header-menu');
    this.item_parents = this.menuContainer.getElementsByClassName('item-parent');
    if (!this.menuContainer) {
      return;
    }
  } // constructor ending

  header_sub_menu(item) {
    var child = item.getElementsByClassName('sub-menu');

    // if not container class named 'hidden'
    if (!child[0].classList.contains('hidden')) {
      child[0].style.opacity = 0;
      setTimeout(function () {
        child[0].classList.remove('d-block');
        child[0].classList.add('hidden');
      }, 450);
      this.controll_dropdown_icon(item, false);
    } else {
      child[0].classList.remove('hidden');
      child[0].classList.add('d-block');
      setTimeout(function () {
        child[0].style.opacity = 1;
      }, 100);
      this.controll_dropdown_icon(item, true);
    }
  }
  controll_dropdown_icon(item, isOpen) {
    let path = item.querySelector('path');
    if (isOpen) {
      path.setAttribute("d", "M6 15l6-6 6 6");
    } else {
      path.setAttribute("d", "M6 9l6 6 6-6");
    }
  }
}
/******/ })()
;
//# sourceMappingURL=header-menu.js.map