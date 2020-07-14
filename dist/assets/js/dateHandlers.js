const historyDate = document.querySelector('.history-date');
const historyItem = document.querySelector('.history-item');

const createSetter = () => {
    let currentItem = historyItem;
    let currentHistoryDate = historyDate;

    return {
        setPrevEl: () => {
            if (currentItem.previousElementSibling) {
                currentItem = currentItem.previousElementSibling;
                currentHistoryDate = currentHistoryDate.previousElementSibling;
            }
        },
        setNextEl: () => {
            if (currentItem.nextElementSibling) {
                currentItem = currentItem.nextElementSibling;
                currentHistoryDate = currentHistoryDate.nextElementSibling;
            }
        },
        getElements: () => ({
            currentItem,
            currentHistoryDate
        })
    }
}

const setter = createSetter();

const activateDate = () => {
    let { currentItem, currentHistoryDate } = setter.getElements();
    let prevItemPosition;
    if (currentItem.previousElementSibling) {
        prevItemPosition = currentItem.previousElementSibling.getBoundingClientRect().top;
    }
    const currentItemPosition = currentItem.getBoundingClientRect().top;
    if (currentItemPosition < 0) {
        if (currentHistoryDate.nextElementSibling) {
            currentHistoryDate.classList.remove('active');
            currentHistoryDate.nextElementSibling.classList.add('active')
        }
        setter.setNextEl();

    } else if (prevItemPosition && prevItemPosition > 0 && prevItemPosition < currentItemPosition) {
        currentHistoryDate.classList.remove('active');
        if (currentHistoryDate.previousElementSibling) {
            currentHistoryDate.previousElementSibling.classList.add('active')
        }
        setter.setPrevEl();
    }

}

document.addEventListener('scroll', () => {
    activateDate();
})
