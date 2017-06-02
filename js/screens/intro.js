import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import greeting from './greeting.js';
import introString from '../templates/intro-template.js';

function Intro() {
  this.element = createEl(this.template);
  this.introButton = this.element.querySelector(`.intro__asterisk`);
  this.introButton.addEventListener(`click`, () => showScreen(greeting.element));
}

Intro.prototype.template = `${introString}`;

const intro = new Intro();
export default intro;
