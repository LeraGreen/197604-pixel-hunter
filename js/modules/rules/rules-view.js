import AbstractView from '../../view.js';
import footer from '../footer/footer-template.js';
import rulesString from './rules-template.js';

export default class RulesView extends AbstractView {
  get template() {
    return `${rulesString}${footer}`.trim();
  }

  bind() {
    const nameUserInput = this.element.querySelector(`.rules__input`);
    const button = this.element.querySelector(`.rules__button`);
    const form = this.element.querySelector(`.rules__form`);
    const backButton = this.element.querySelector(`.header__back`);
    nameUserInput.addEventListener(`input`, () => {
      this.changeDisabled(button, nameUserInput);
    });
    form.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this.submitForm();
    });
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });
  }

  onBackButtonClick() {

  }

  changeDisabled(button, input) {
    if (input.value === ``) {
      button.setAttribute(`disabled`, `disabled`);
    } else {
      button.removeAttribute(`disabled`);
    }
  }

  submitForm() {

  }
}
