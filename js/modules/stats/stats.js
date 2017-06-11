import {showScreen, createContent} from '../utils.js';
import Greeting from '../greeting/greeting.js';
import footer from '../footer/footer-template.js';
import header from '../header/header-template.js';
import statsString from './stats-template.js';
import {initialState} from '../../data/data.js';

function Stats() {
  const template = `${header(initialState)}${statsString}${footer}`;
  this.element = createContent(template);
  const backButton = this.element.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => {
    const greeting = new Greeting();
    showScreen(greeting.element);
  });
}

export default Stats;
