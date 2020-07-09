const slides = document.querySelector('.slider-box .slides').children;

const pageNumber = document.querySelector('.page-number');

const countPages = pageNumber.querySelector('.count').innerHTML = slides.length < 10 ? `0${slides.length}` : slides.length;
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
    if (counter.value() < slides.length) {
        slides[counter.value() - 1].classList.toggle('active');
        counter.plus()
        slides[counter.value() - 1].classList.toggle('active');
        currentPage.innerHTML = `0${counter.value()}`;
        title1.classList.toggle('opacity');
        title2.classList.toggle('opacity');
        calculateBtn.classList.toggle('opacity');

    }
}

const prevSlide = () => {
    if (counter.value() > 1) {
        slides[counter.value() - 1].classList.toggle('active');
        counter.minus()
        slides[counter.value() - 1].classList.toggle('active');
        currentPage.innerHTML = `0${counter.value()}`;
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
