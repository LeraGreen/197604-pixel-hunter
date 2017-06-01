import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import Greeting from './greeting.js';
import introString from '../templates/intro-template.js';

function Intro() {
  this.element = createEl(this.template);
  this.introButton = this.element.querySelector(`.intro__asterisk`);
  this.introButton.addEventListener(`click`, () => showScreen(new Greeting()));
}

Intro.prototype.template = `${introString}`;

export default Intro;
