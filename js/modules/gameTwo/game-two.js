import {showScreen, createContent, createImg} from '../utils.js';
import GameThree from '../gameThree/game-three.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameTwoString from './game-two-template.js';
import Greeting from '../greeting/greeting.js';
import {initialState, questions} from '../../data/data.js';

function GameTwo() {
  const template = `${header(initialState)}${gameTwoString(questions[0])}${footer}`;
  this.element = createContent(template);
  const answers = this.element.querySelectorAll(`.game__answer input`);

  const containers = this.element.querySelectorAll(`.game__option`);
  createImg(containers, questions[0]);

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
