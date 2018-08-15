const page = document.querySelector('.page');
const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('.close[data-action="close-modal"]');
const submitForm = document.querySelector('.js-user-data');
const wrapperBlock = document.querySelector('.wrapper');
const congrats = document.querySelector('.congratulations');
const buttonWrapper = document.querySelector('.js-change-button');
const blockInfo = document.querySelector('.js-user-info')
const clockface = document.querySelector(".js-clockface");

const clock = {
  startTime: null, 
  deltaTime: null,
  id: null,
  startClock() {
    this.startTime = Date.now();
    
    this.id = setInterval(() =>{
      const currentTime = Date.now();
      const time = formatTime(currentTime);
      clockface.textContent = time;
    }, 1000);
   }                       
}

let userChange;

openModalBtn.addEventListener('click', handleOpenModal);
closeModalBtn.addEventListener('click', handleCloseModal);
buttonWrapper.addEventListener('click', userEagleORtails);
submitForm.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', clock.startClock.bind(clock))

function User(name = "Гость") {
    this.name = name;
}

function Change(change){
  this.change = change;
}

function formatTime(ms) {
  const date = new Date(ms);
  
  let hours = date.getHours();
  hours = hours < 10 ? `0${hours}` : hours;
  
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;


  return `${hours}:${minutes}:${seconds}`;
}


function handleOpenModal() {
    page.classList.add('show-modal');

    window.addEventListener('keydown', handleKeyCloseModal);
}

function handleCloseModal() {
    page.classList.remove('show-modal');

    window.removeEventListener('keydown', handleKeyCloseModal);
}

function handleKeyCloseModal(event) {
    const code = event.code;

    if (code !== 'Escape') return;

    handleCloseModal();
}



function handleSubmit(evt) {
  const change = new Change(userChange);
  
    evt.preventDefault();
    testBlockWithInfoUser();
    handleCloseModal();
    paintUserObj(change);
    submitForm.reset();
}



function createTextBlock( change, randNumber) {
    const resultText = `<div class="resultWrapper">
      <p>Ваш выбор: ${change}</p>
       <p>Результат: ${randNumber}</p>
    </div>`;

    return resultText;
}

function paintUserObj({change }) {
    const randNumber = randomNumber();

    userInfo = createTextBlock(change, randNumber);

    if (change !== randNumber) {
        congrats.style.color = 'red';
        congrats.textContent = 'Сожалеем вы не угадали'
    } else {
        congrats.style.color = 'green';
        congrats.textContent = 'Ура ви угадали!'
    }

    blockInfo.insertAdjacentHTML('afterbegin', userInfo);
    openModalBtn.textContent = 'Попробуй еще';
}

function randomNumber() {
    const arrText = ['Орел', 'Решка']
    const number = Math.floor((Math.random() * arrText.length));

    return arrText[number];
}

function userEagleORtails(event) {
    const target = event.target;
    const action = target.dataset.action;

    switch (action) {
        case 'eagle':
            userChange = event.target.value;
            break;
        case 'tails':
            userChange = event.target.value;
            break;
    }

    return userChange;
}

function testBlockWithInfoUser() {
    const blockUserInfo = wrapperBlock.querySelector('.resultWrapper')

    if (blockUserInfo !== null) {
        blockUserInfo.remove();
    }
}
