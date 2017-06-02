import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import rules from './rules.js';
import footer from '../templates/footer-template.js';
import greetingString from '../templates/greeting-template.js';

const Greeting = function () {
  this.element = createEl(this.template);
  this.greetingButton = this.element.querySelector(`.greeting__continue`);
  this.greetingButton.addEventListener(`click`, () => showScreen(rules.element));
};

Greeting.prototype.template = `${greetingString + footer}`;

const greeting = new Greeting();
export default greeting;
