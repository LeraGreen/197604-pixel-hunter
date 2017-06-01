import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import Rules from './rules.js';
import footer from '../templates/footer-template.js';
import greetingString from '../templates/greeting-template.js';

const Greeting = function () {
  this.element = createEl(this.template);
  this.greetingButton = this.element.querySelector(`.greeting__continue`);
  this.greetingButton.addEventListener(`click`, () => showScreen(new Rules()));
};

Greeting.prototype.template = `${greetingString + footer}`;

export default Greeting;
