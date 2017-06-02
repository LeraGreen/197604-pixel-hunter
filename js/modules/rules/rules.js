import {createArray, showScreen, createContent} from '../utils.js';
import gameOne from '../gameOne/game-one.js';
import footer from '../footer/footer-template.js';
import rulesString from './rules-template.js';
import greeting from '../greeting/greeting.js';

const rulesTemplate = `${rulesString}${footer}`;
const rulesContent = createContent(rulesTemplate);
const rulesArray = createArray(rulesContent.childNodes);
const nameUserInput = rulesContent.querySelector(`.rules__input`);
const rulesButton = rulesContent.querySelector(`.rules__button`);
const rulesForm = rulesContent.querySelector(`.rules__form`);
nameUserInput.addEventListener(`input`, () => changeDisabled());
rulesForm.addEventListener(`submit`, (event) => submitForm());
const rulesBackButton = rulesContent.querySelector(`.header__back`);
rulesBackButton.addEventListener(`click`, () => showScreen(greeting));

const submitForm = () => {
  event.preventDefault();
  showScreen(gameOne);
};

const changeDisabled = () => {
  if (nameUserInput.value === ``) {
    rulesButton.setAttribute(`disabled`, `disabled`);
  } else {
    rulesButton.removeAttribute(`disabled`);
  }
};

export default rulesArray;
