import {showScreen, createContent} from '../utils.js';
import Rules from '../rules/rules.js';
import footer from '../footer/footer-template.js';
import greetingString from './greeting-template.js';

function Greeting() {
  const template = `${greetingString}${footer}`;
  this.element = createContent(template);
  const button = this.element.querySelector(`.greeting__continue`);
  button.addEventListener(`click`, () => {
    const rules = new Rules();
    showScreen(rules.element);
  });
}

export default Greeting;
