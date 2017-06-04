import {showScreen, createContent} from '../utils.js';
import Greeting from '../greeting/greeting.js';
import introString from './intro-template.js';

function Intro() {
  const template = `${introString}`;
  this.element = createContent(template);
  const button = this.element.querySelector(`.intro__asterisk`);
  button.addEventListener(`click`, () => {
    const greeting = new Greeting();
    showScreen(greeting.element);
  });
}

export default Intro;
