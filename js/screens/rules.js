import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import gameOne from './game-one.js';
import footer from '../templates/footer-template.js';
import rulesString from '../templates/rules-template.js';
import greeting from './greeting.js';

function Rules() {
  this.element = createEl(this.template);
  this.nameUserInput = this.element.querySelector(`.rules__input`);
  this.rulesButton = this.element.querySelector(`.rules__button`);
  this.rulesForm = this.element.querySelector(`.rules__form`);
  this.nameUserInput.addEventListener(`input`, () => this.changeDisabled());
  this.rulesForm.addEventListener(`submit`, this.submitForm);
  this.backButton = this.element.querySelector(`.header__back`);
  this.backButton.addEventListener(`click`, () => showScreen(greeting.element));
}

Rules.prototype.submitForm = (event) => {
  event.preventDefault();
  showScreen(gameOne.element);
};

Rules.prototype.changeDisabled = function () {
  if (this.nameUserInput.value === ``) {
    this.rulesButton.setAttribute(`disabled`, `disabled`);
  } else {
    this.rulesButton.removeAttribute(`disabled`);
  }
};

Rules.prototype.template = `${rulesString + footer}`;

const rules = new Rules();
export default rules;
