import {showScreen, createContent, resizeImages} from '../utils.js';
import Stats from '../stats/stats.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameThreeString from './game-three-template.js';
import Greeting from '../greeting/greeting.js';
import {initialState} from '../../data.js';

function GameThree() {
  const template = `${header(initialState)}${gameThreeString}${footer}`;
  this.element = createContent(template);
  const gameOptions = this.element.querySelectorAll(`.game__option`);
  for (const option of gameOptions) {
    option.addEventListener(`click`, () => {
      const stats = new Stats();
      showScreen(stats.element);
    });
  }
  const images = this.element.querySelectorAll(`.game__image`);
  const backButton = this.element.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => {
    const greeting = new Greeting();
    showScreen(greeting.element);
  });
  resizeImages(images);
}

export default GameThree;
