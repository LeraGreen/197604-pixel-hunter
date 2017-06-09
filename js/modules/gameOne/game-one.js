import {showScreen, createContent, resizeImages} from '../utils.js';
import GameTwo from '../gameTwo/game-two.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameOneString from './game-one-template.js';
import Greeting from '../greeting/greeting.js';
import {initialState} from '../../data.js';

function GameOne() {
  const template = `${header(initialState)}${gameOneString}${footer}`;
  this.element = createContent(template);
  const images = this.element.querySelectorAll(`.game__image`);
  const form = this.element.querySelector(`.game__content`);
  form.addEventListener(`change`, () => countCheckedButtons());
  const backButton = this.element.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => {
    const greeting = new Greeting();
    showScreen(greeting.element);
  });
  const checkRadioButton = (radioName) => {
    const radioButtons = form.querySelectorAll(`input[name=${radioName}]`);
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
      const gameTwo = new GameTwo();
      showScreen(gameTwo.element);
    }
  };
  resizeImages(images);
}

export default GameOne;
