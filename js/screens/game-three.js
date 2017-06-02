import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import stats from './stats.js';
import header from '../templates/header-template.js';
import footer from '../templates/footer-template.js';
import gameThreeString from '../templates/game-three-template.js';
import greeting from './greeting.js';

function GameThree() {
  this.element = createEl(this.template);
  this.gameOptions = this.element.querySelectorAll(`.game__option`);
  for (const option of this.gameOptions) {
    option.addEventListener(`click`, () => (showScreen(stats)));
  }
  this.backButton = this.element.querySelector(`.header__back`);
  this.backButton.addEventListener(`click`, () => showScreen(greeting));
}

GameThree.prototype.template = `${header + gameThreeString + footer}`;

const gameThree = new GameThree();
export default gameThree.element;
