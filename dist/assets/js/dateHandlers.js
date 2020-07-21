const historyDate = document.querySelector('.history-date');
const historyItem = document.querySelector('.history-item');

const navBlock = document.querySelector('.navigation-block');
const historyPeriod = document.querySelector('.history-period')
const navList = document.querySelector('.company-navigation-list');

historyPeriod.style.top = `${navList.getBoundingClientRect().bottom}px`;
if(historyPeriod.getBoundingClientRect().bottom > window.innerHeight) {
    historyPeriod.style.position = 'absolute';
}

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
    if (historyPeriod.getBoundingClientRect().bottom > navBlock.getBoundingClientRect().top) {
        historyPeriod.style.position = 'absolute';
        historyPeriod.style.top = `${navBlock.getBoundingClientRect().top + document.documentElement.scrollTop - historyPeriod.getBoundingClientRect().height - 25}px`;
    } else if (historyPeriod.getBoundingClientRect().top > navList.getBoundingClientRect().bottom + document.documentElement.scrollTop){
        historyPeriod.style.position = 'fixed';
        historyPeriod.style.top = `${navList.getBoundingClientRect().bottom + document.documentElement.scrollTop}px`
    }
})

