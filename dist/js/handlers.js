const menuBtn = document.querySelector('.aside-open-menu');
const menu = document.querySelector('.burger-menu');
const humburgerBtn = document.querySelector('.burger-box')

menuBtn.addEventListener('click', () => {
    humburgerBtn.classList.toggle('open')
    menu.classList.toggle('opened');
})

menu.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'menu-item' && e.target.classList[1] === 'expanded') {
        e.target.parentNode.classList.toggle('opened');
        e.target.classList.toggle('opened');
    }
})

