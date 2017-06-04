import {showScreen, createContent} from '../utils.js';
import GameOne from '../gameOne/game-one.js';
import footer from '../footer/footer-template.js';
import rulesString from './rules-template.js';
import Greeting from '../greeting/greeting.js';

function Rules() {
  const template = `${rulesString}${footer}`;
  this.element = createContent(template);
  const nameUserInput = this.element.querySelector(`.rules__input`);
  const button = this.element.querySelector(`.rules__button`);
  const form = this.element.querySelector(`.rules__form`);
  nameUserInput.addEventListener(`input`, () => changeDisabled());
  form.addEventListener(`submit`, (event) => submitForm());
  const backButton = this.element.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => {
    const greeting = new Greeting();
    showScreen(greeting.element);
  });
  const submitForm = () => {
    event.preventDefault();
    const gameOne = new GameOne();
    showScreen(gameOne.element);
  };
  const changeDisabled = () => {
    if (nameUserInput.value === ``) {
      button.setAttribute(`disabled`, `disabled`);
    } else {
      button.removeAttribute(`disabled`);
    }
  };
}

export default Rules;
