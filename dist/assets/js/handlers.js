const body = document.body;

const menuBtn = document.querySelector('.aside-open-menu');
const searchBtn = document.querySelector('.aside-search');
const humburgerBtn = document.querySelector('.burger-box')

const navMenu = document.querySelector('#alt-menu-1');
const searchMenu = document.querySelector('#alt-menu-2');
const contactMenu = document.querySelector('#alt-menu-3');

const callbackBtn = document.querySelector('.callback');

const mobileMenuBtn = document.querySelector('.mobile-aside-menu .aside-open-menu');
const mobileHumburgerBtn = mobileMenuBtn.querySelector('.burger-box');


const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);


const openMailMenu = (e) => {
    if (searchBtn.classList[1]) {
        searchMenu.classList.toggle('opened');
        searchBtn.classList.toggle('opened');
    }
    if (navMenu.classList[1]) {
        navMenu.classList.toggle('opened');
        humburgerBtn.classList.toggle('opened')
        mobileHumburgerBtn.classList.toggle('opened');
    }
    
    body.classList.remove('noScroll')
    contactMenu.classList.toggle('opened');

    if (contactMenu.classList[1]) {
        body.classList.add('noScroll')
    }
    e.stopPropagation();
}

const openNavMenu = (e) => {
    if (searchBtn.classList[1]) {
        searchMenu.classList.toggle('opened');
        searchBtn.classList.toggle('opened');
    }
    if(contactMenu.classList[1]){
        contactMenu.classList.toggle('opened')
    }

    body.classList.remove('noScroll')

    mobileHumburgerBtn.classList.toggle('opened');
    humburgerBtn.classList.toggle('opened')
    navMenu.classList.toggle('opened');

    if (navMenu.classList[1]) {
        body.classList.add('noScroll')
    }
    e.stopPropagation();
}

menuBtn.addEventListener('click', openNavMenu)

mobileMenuBtn.addEventListener('click', openNavMenu)

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
    }
    searchBtn.classList.toggle('opened');
    searchMenu.classList.toggle('opened');
    e.stopPropagation();
})


callbackBtn.addEventListener('click', openMailMenu);

const onClickAway = (elem, btn) => (e) => {
    if (!elem.contains(e.target) && isVisible(elem)) {
        elem.classList.toggle('opened');
        btn.classList.toggle('opened');
        body.classList.remove('noScroll');
    }
}

document.querySelector('body').addEventListener('click', (e) => {
    onClickAway(searchMenu, searchBtn)(e);
    onClickAway(navMenu, humburgerBtn)(e);
    if(contactMenu.classList[1]){
        onClickAway(contactMenu,callbackBtn)(e);
    }
})