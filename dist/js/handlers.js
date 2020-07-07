const menuBtn = document.querySelector('.aside-open-menu');
const searchBtn = document.querySelector('.aside-search');
const mailBtn = document.querySelector('.aside-mail');
const humburgerBtn = document.querySelector('.burger-box')

const menu = document.querySelector('#alt-menu-1');
const searchMenu = document.querySelector('#alt-menu-2');
const contactMenu = document.querySelector('#alt-menu-3');

function closeOtherModal() {
    if (searchMenu.classList[1]) {
        searchMenu.classList.toggle('opened');
        searchBtn.classList.toggle('opened');
    }
    if (menu.classList[1]) {
        menu.classList.toggle('opened');
        humburgerBtn.classList.toggle('open')
    }
    if (contactMenu.classList[1]) {
        contactMenu.classList.toggle('opened');
        mailBtn.classList.toggle('open')
    }
}


menuBtn.addEventListener('click', () => {
    if (contactMenu.classList[1]) {
        contactMenu.classList.toggle('opened');
        mailBtn.classList.toggle('open')
    }
    if (searchMenu.classList[1]) {
        searchMenu.classList.toggle('opened');
        searchBtn.classList.toggle('opened');
    }
    humburgerBtn.classList.toggle('open')
    menu.classList.toggle('opened');
})

menu.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'menu-item' && e.target.classList[1] === 'expanded') {
        e.target.parentNode.classList.toggle('opened');
        e.target.classList.toggle('opened');
    }
})

searchBtn.addEventListener('click', () => {
    if (menu.classList[1]) {
        menu.classList.toggle('opened');
        humburgerBtn.classList.toggle('open')
    }
    if (contactMenu.classList[1]) {
        contactMenu.classList.toggle('opened');
        mailBtn.classList.toggle('open')
    }
    searchBtn.classList.toggle('opened');
    searchMenu.classList.toggle('opened');
})

mailBtn.addEventListener('click', () => {
    if (searchMenu.classList[1]) {
        searchMenu.classList.toggle('opened');
        searchBtn.classList.toggle('opened');
    }
    if (menu.classList[1]) {
        menu.classList.toggle('opened');
        humburgerBtn.classList.toggle('open')
    }
    contactMenu.classList.toggle('opened');
    mailBtn.classList.toggle('open')
})

