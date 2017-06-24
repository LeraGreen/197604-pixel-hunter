import AbstractView from '../../view.js';
import introString from './intro-template.js';

export default class IntroView extends AbstractView {
  get template() {
    return `${introString}`.trim();
  }

  bind() {
    const button = this.element.querySelector(`.intro__asterisk`);
    button.addEventListener(`click`, () => {
      this.onNextButtonClick();
    });
  }

  onNextButtonClick() {

  }
}
