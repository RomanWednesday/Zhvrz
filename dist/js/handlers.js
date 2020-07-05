const menuBtn = document.querySelector('.aside-open-menu');
const menu = document.querySelector('.burger-menu');
const humburgerBtn = document.querySelector('.burger-box')

menuBtn.addEventListener('click', () => {
    humburgerBtn.classList.toggle('open')
    menu.classList.toggle('opened');
})