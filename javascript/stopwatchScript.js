// THEME FUNCTIONS 

const changeThemeBtn = document.querySelector('button.theme-changer');
const changeThemeBtnText = document.querySelector('button.theme-changer span');
let flag = false;

const changeButtonTextContent = () => {
    if (flag === false) {
        changeThemeBtnText.textContent = 'Zmień motyw na ciemny'
    } else if (flag === true) {
        changeThemeBtnText.textContent = 'Zmień motyw na jasny'
    }
}

const changeTheme = () => {
    document.querySelector('.wrapper').classList.toggle('dark-theme')
    flag = !flag;
    changeButtonTextContent()
}


// STOPWATCH FUNCTIONS 

const startBtn = document.querySelector('button.start');
const resetBtn = document.querySelector('button.reset');
const secondsText = document.querySelector('.seconds');
const miliText = document.querySelector('.milliseconds');
const minText = document.querySelector('.minutes');
const hand = document.querySelector('.hand');
const text = document.querySelector('p');

let miliSeconds = 0;
let seconds = 0;
let minutes = 0;
let deg = 0;
let active = false;
let index;
const array = [];


const stopwatch = () => {
    if (!active) {
        active = !active
        index = setInterval(startStopwatch, 10);
    } else {
        active = false;
        clearInterval(index);
    }
}

const startStopwatch = () => {
    miliSeconds++;
    deg = deg + (6 / 100);
    hand.style.transform = `rotateZ(${deg}deg)`;
    if (miliSeconds === 100) {
        miliSeconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    miliText.textContent = miliSeconds < 10 ? `0${miliSeconds}` : miliSeconds;
    secondsText.textContent = seconds < 10 ? `0${seconds}` : seconds;
    minText.textContent = minutes < 10 ? `0${minutes}` : minutes;
}

const reset = () => {
    array.push(minutes < 10 ? `0${minutes}` : minutes);
    array.push(seconds < 10 ? `0${seconds}` : seconds);
    array.push(miliSeconds < 10 ? `0${miliSeconds}` : miliSeconds);
    miliSeconds = 0;
    seconds = 0;
    minutes = 0;
    deg = 0;
    miliText.textContent = '00';
    secondsText.textContent = '00';
    minText.textContent = '00';
    document.querySelector('.last-time p').textContent = array.join(':');
    hand.style.transform = `rotateZ(${deg}deg)`;
    array.length = 0;
    active = false;
    clearInterval(index);
}


// EVENT LISTENERS 

changeThemeBtn.addEventListener('click', changeTheme);
startBtn.addEventListener('click', stopwatch);
resetBtn.addEventListener('click', reset);