import {createArray, showScreen, createContent} from '../utils.js';
import gameTwo from '../gameTwo/game-two.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameOneString from './game-one-template.js';
import greeting from '../greeting/greeting.js';

const gameOneTemplate = `${header}${gameOneString}${footer}`;
const gameOneContent = createContent(gameOneTemplate);
const gameOneArray = createArray(gameOneContent.childNodes);
const gameOneForm = gameOneContent.querySelector(`.game__content`);
gameOneForm.addEventListener(`change`, () => countCheckedButtons());
const gameOneBackButton = gameOneContent.querySelector(`.header__back`);
gameOneBackButton.addEventListener(`click`, () => showScreen(greeting));

const checkRadioButton = (radioName) => {
  const radioButtons = gameOneForm.querySelectorAll(`input[name=${radioName}]`);
  for (const radio of radioButtons) {
    if (radio.checked) {
      return true;
    }
  }
  return false;
};

const countCheckedButtons = () => {
  if (checkRadioButton(`question1`) && checkRadioButton(`question2`)) {
    event.preventDefault();
    showScreen(gameTwo);
  }
};

export default gameOneArray;
