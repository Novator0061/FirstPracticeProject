const burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('header__menu_active');
});
