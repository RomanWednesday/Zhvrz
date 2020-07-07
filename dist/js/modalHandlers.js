const modal = document.querySelector('.modal');
const closeModalBtn = modal.querySelector('.modal-header .close-button');
const openModalBtn = document.querySelector('.leader-info .btn-border');

closeModalBtn.addEventListener('click', () => {
    modal.classList.toggle('opened');
})

openModalBtn.addEventListener('click', () => {
    modal.classList.toggle('opened');
})