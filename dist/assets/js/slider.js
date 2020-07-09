const imgPaths = [
    'assets/img/first-main-img.png',
    'assets/img/second-main-img.png'
]
const main = document.querySelector('.main');
const pageNumber = document.querySelector('.page-number');

const countPages = pageNumber.querySelector('.count').innerHTML = imgPaths.length < 10 ? `0${imgPaths.length}` : imgPaths.length;
const currentPage = pageNumber.querySelector('.current');

const sliderWrapper = document.querySelector('.slider-wrapper');
const title1 = document.querySelector('.title-1');
const title2 = document.querySelector('.title-2');
const calculateBtn = document.querySelector('.calculate-btn');

function makePageCounter() {
    let current = Number(currentPage.innerHTML);
    return {
        plus: function () { return current++ },
        minus: function () { return current-- },
        value: function () { return current }
    }
}

const counter = makePageCounter();

const nextSlide = () => {
    if (counter.value() < imgPaths.length) {
        counter.plus()
        currentPage.innerHTML = `0${counter.value()}`;
        sliderWrapper.style.transform = `translateX(-${(counter.value() - 1) * 100}%)`;
        title1.classList.toggle('opacity');
        title2.classList.toggle('opacity');
        calculateBtn.classList.toggle('opacity');

    }
}

const prevSlide = () => {
    if (counter.value() > 1) {
        counter.minus()
        currentPage.innerHTML = `0${counter.value()}`;
        sliderWrapper.style.transform = `translateX(${(counter.value() - 1) * 100}%)`;
        title2.classList.toggle('opacity');
        title1.classList.toggle('opacity');
        calculateBtn.classList.toggle('opacity');
    }
}

const prevBtn = document.querySelector('.pagination-block .arrow-left').addEventListener('click', () => {
    prevSlide();
})

const nextBtn = document.querySelector('.pagination-block .arrow-right').addEventListener('click', () => {
    nextSlide();
})
