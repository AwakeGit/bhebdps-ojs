const links = Array.from(document.querySelectorAll('.menu__link'));

links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    const subMenu = link.closest('.menu__item').querySelector('.menu_sub');
    if (!subMenu) {
      return;
    }

    event.preventDefault();

    const allSubMenus = Array.from(document.querySelectorAll('.menu_sub'));
    allSubMenus.forEach(function (menu) {
      if (menu !== subMenu) {
        menu.classList.remove('menu_active');
      }
    });

    subMenu.classList.toggle('menu_active');
  });
});
