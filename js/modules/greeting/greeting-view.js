import AbstractView from '../../view.js';
import greetingString from './greeting-template.js';
import footer from '../footer/footer-template.js';

export default class GreetingView extends AbstractView {
  get template() {
    return `${greetingString}${footer}`.trim();
  }

  bind() {
    const button = this.element.querySelector(`.greeting__continue`);
    button.addEventListener(`click`, () => {
      this.onNextButtonClick();
    });
  }

  onNextButtonClick() {

  }
}
