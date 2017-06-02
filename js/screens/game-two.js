import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import gameThree from './game-three.js';
import header from '../templates/header-template.js';
import footer from '../templates/footer-template.js';
import gameTwoString from '../templates/game-two-template.js';
import greeting from './greeting.js';

function GameTwo() {
  this.element = createEl(this.template);
  this.answers = this.element.querySelectorAll(`.game__answer input`);
  this.backButton = this.element.querySelector(`.header__back`);
  this.backButton.addEventListener(`click`, () => showScreen(greeting.element));
  for (const answer of this.answers) {
    answer.addEventListener(`change`, () => (showScreen(gameThree.element)));
  }
}

GameTwo.prototype.template = `${header + gameTwoString + footer}`;

const gameTwo = new GameTwo();
export default gameTwo;
