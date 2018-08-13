const page = document.querySelector('.page');
const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('.close[data-action="close-modal"]');
const submitForm = document.querySelector('.js-user-data');
const userInput = document.querySelectorAll('.user-input');
const wrapperBlock = document.querySelector('.wrapper');
const congrats = document.querySelector('.congratulations')
let user;

openModalBtn.addEventListener('click', handleOpenModal);
closeModalBtn.addEventListener('click', handleCloseModal);
submitForm.addEventListener('submit', handleSubmit)
function User (name, slogan, number) {
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
  

  return inputValue;
}

function handleSubmit(evt) {
  evt.preventDefault();
  const inputValue = arrayValueInputs();
  user = new User(...inputValue);

  handleCloseModal();
  paintUserObj(user);

  submitForm.reset();
}


function paintUserObj ({name, slogan, number}) {
  const randNumber = randomNumber();
  const resultText = `<div class="resultWrapper">
      <h3>Привет: ${name}</h3>
      <p>Ваш девиз: ${slogan}</p>
      <p>Ваш выбор: ${number}</p>
      <p>Результат: ${randNumber}</p>
    </div>`;

    if (number !== randNumber) {
      congrats.style.color = 'red';
     congrats.textContent = 'Сожалеем вы не угадали'
    } else {
      congrats.style.color = 'green';
      congrats.textContent = 'Ура ви угадали!'
    }
  
  wrapperBlock.insertAdjacentHTML('beforeend', resultText);
  openModalBtn.textContent = 'Попробуй еще';
}

function randomNumber () {
  const arrText = ['Орел', 'Решка']
  const number = Math.floor((Math.random() * arrText.length));

  return arrText[number];
}

