import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import GameOne from './game-one.js';
import footer from '../templates/footer-template.js';
import rulesString from '../templates/rules-template.js';
import Greeting from './greeting.js';

function Rules() {
  this.element = createEl(this.template);
  this.nameUserInput = this.element.querySelector(`.rules__input`);
  this.rulesButton = this.element.querySelector(`.rules__button`);
  this.rulesForm = this.element.querySelector(`.rules__form`);
  this.nameUserInput.addEventListener(`input`, () => this.changeDisabled());
  this.rulesForm.addEventListener(`submit`, this.submitForm);
  this.backButton = this.element.querySelector(`.header__back`);
  this.backButton.addEventListener(`click`, () => showScreen(new Greeting()));
}

Rules.prototype.submitForm = (event) => {
  event.preventDefault();
  showScreen(new GameOne());
};

Rules.prototype.changeDisabled = function () {
  if (this.nameUserInput.value === ``) {
    this.rulesButton.setAttribute(`disabled`, `disabled`);
  } else {
    this.rulesButton.removeAttribute(`disabled`);
  }
};

Rules.prototype.template = `${rulesString + footer}`;

export default Rules;
