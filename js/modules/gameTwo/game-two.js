import {showScreen, createContent, resizeImages} from '../utils.js';
import GameThree from '../gameThree/game-three.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameTwoString from './game-two-template.js';
import Greeting from '../greeting/greeting.js';
import {initialState} from '../../data/data.js';

function GameTwo() {
  const template = `${header(initialState)}${gameTwoString}${footer}`;
  this.element = createContent(template);
  const answers = this.element.querySelectorAll(`.game__answer input`);

  const containers = this.element.querySelectorAll(`.game__option`);
  let i = 0;
  for (const container of containers) {
    const image = new Image();
    image.src = initialState.questions[0].answers[i++].img;
    container.insertBefore(image, container.children[0]);
    image.onload = () => {
      resizeImages(image);
    };
  }

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
