const page = document.querySelector('.page');
const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('.close[data-action="close-modal"]');
const submitForm = document.querySelector('.js-user-data');
const userInput = document.querySelectorAll('.user-input');
const wrapperBlock = document.querySelector('.wrapper');
const congrats = document.querySelector('.congratulations');
const buttonWrapper = document.querySelector('.js-change-button');
const blockInfo = document.querySelector('.js-user-info')
let user;
let userChange;
let userInfo;


openModalBtn.addEventListener('click', handleOpenModal);
closeModalBtn.addEventListener('click', handleCloseModal);
buttonWrapper.addEventListener('click', userEagleORtails);
submitForm.addEventListener('submit', handleSubmit);

function User (name = "Гость", slogan = "Гости в доме, радость в мире", number) {
  this.name = name;
  this.slogan = slogan;
  this.number = number;
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

  if(code !== 'Escape') return;

  handleCloseModal();
}

function arrayValueInputs() {
  const inputsObj = Array.from(userInput);
  const inputValue = inputsObj.map(input => input.value);
  inputValue.push(userChange);

  return inputValue;
}

function handleSubmit(evt) {
  const inputValue = arrayValueInputs();
  
  evt.preventDefault();
  testBlockWithInfoUser();

  user = new User(...inputValue);
  
  handleCloseModal();
  paintUserObj(user);
  submitForm.reset(); 
}



function createTextBlock(name, slogan, number, randNumber) {
    const resultText = `<div class="resultWrapper">
      <h3>Привет: ${name}</h3>
      <p>Ваш девиз: ${slogan}</p>
      <p>Ваш выбор: ${number}</p>
      <p>Результат: ${randNumber}</p>
    </div>`;

  return resultText;
}

function paintUserObj ({name, slogan, number}) {
  const randNumber = randomNumber();
   userInfo = createTextBlock(name, slogan, number, randNumber);

    if (number !== randNumber) {
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

  switch(action) {
    case 'eagle':
    userChange =  event.target.value;
    break;
    case 'tails':
    userChange =  event.target.value;
    break;
  }

return userChange;
}

function testBlockWithInfoUser() {
  const blockUserInfo = wrapperBlock.querySelector('.resultWrapper')

if(blockUserInfo !== null){
  blockUserInfo.remove();
}
}