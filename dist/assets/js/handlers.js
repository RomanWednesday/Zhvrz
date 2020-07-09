const menuBtn = document.querySelector('.aside-open-menu');
const searchBtn = document.querySelector('.aside-search');
const mailBtn = document.querySelector('.aside-mail');
const humburgerBtn = document.querySelector('.burger-box')

const navMenu = document.querySelector('#alt-menu-1');
const searchMenu = document.querySelector('#alt-menu-2');
const contactMenu = document.querySelector('#alt-menu-3');

const callbackBtn = document.querySelector('.callback');

const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);


const openMailMenu = (e) => {
    if (searchMenu.classList[1]) {
        searchMenu.classList.toggle('opened');
        searchBtn.classList.toggle('opened');
    }
    if (navMenu.classList[1]) {
        navMenu.classList.toggle('opened');
        humburgerBtn.classList.toggle('opened')
    }
    contactMenu.classList.toggle('opened');
    mailBtn.classList.toggle('opened')
    e.stopPropagation();
}

menuBtn.addEventListener('click', (e) => {
    if (contactMenu.classList[1]) {
        contactMenu.classList.toggle('opened');
        mailBtn.classList.toggle('opened')
    }
    if (searchMenu.classList[1]) {
        searchMenu.classList.toggle('opened');
        searchBtn.classList.toggle('opened');
    }
    humburgerBtn.classList.toggle('opened')
    navMenu.classList.toggle('opened');
    e.stopPropagation();
})

navMenu.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'menu-item' && e.target.classList[1] === 'expanded') {
        e.target.parentNode.classList.toggle('opened');
        e.target.classList.toggle('opened');
        e.stopPropagation();
    }
})

searchBtn.addEventListener('click', (e) => {
    if (navMenu.classList[1]) {
        navMenu.classList.toggle('opened');
        humburgerBtn.classList.toggle('opened')
    }
    if (contactMenu.classList[1]) {
        contactMenu.classList.toggle('opened');
        mailBtn.classList.toggle('opened')
    }
    searchBtn.classList.toggle('opened');
    searchMenu.classList.toggle('opened');
    e.stopPropagation();
})

mailBtn.addEventListener('click', openMailMenu)

callbackBtn.addEventListener('click', openMailMenu);

const onClickAway = (elem, btn) => (e) => {
    if (!elem.contains(e.target) && isVisible(elem)) {
        elem.classList.toggle('opened');
        btn.classList.toggle('opened');
    }
}

document.querySelector('body').addEventListener('click', (e) => {
    onClickAway(contactMenu, mailBtn)(e);
    onClickAway(searchMenu, searchBtn)(e);
    onClickAway(navMenu, humburgerBtn)(e);
})

