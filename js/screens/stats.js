import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import greeting from './greeting.js';
import footer from '../templates/footer-template.js';
import header from '../templates/header-template.js';
import statsString from '../templates/stats-template.js';

function Stats() {
  this.element = createEl(this.template);
  this.backButton = this.element.querySelector(`.header__back`);
  this.backButton.addEventListener(`click`, () => showScreen(greeting));
}

Stats.prototype.template = `${header + statsString + footer}`;

const stats = new Stats();
export default stats.element;
