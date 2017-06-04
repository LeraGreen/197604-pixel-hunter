import {showScreen, createContent} from '../utils.js';
import GameThree from '../gameThree/game-three.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameTwoString from './game-two-template.js';
import Greeting from '../greeting/greeting.js';

function GameTwo() {
  const template = `${header}${gameTwoString}${footer}`;
  this.element = createContent(template);
  const answers = this.element.querySelectorAll(`.game__answer input`);
  const backButton = this.element.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => {
    const greeting = new Greeting();
    showScreen(greeting.element);
  });
  for (const answer of answers) {
    answer.addEventListener(`change`, () => {
      const gameThree = new GameThree();
      showScreen(gameThree.element);
    });
  }
}

export default GameTwo;