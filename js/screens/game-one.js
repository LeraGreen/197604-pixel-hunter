import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import gameTwo from './game-two.js';
import header from '../templates/header-template.js';
import footer from '../templates/footer-template.js';
import gameOneString from '../templates/game-one-template.js';
import greeting from './greeting.js';

function GameOne() {
  this.element = createEl(this.template);
  this.form = this.element.querySelector(`.game__content`);
  this.form.addEventListener(`change`, () => this.countCheckedButtons());
  this.backButton = this.element.querySelector(`.header__back`);
  this.backButton.addEventListener(`click`, () => showScreen(greeting.element));
}

GameOne.prototype.template = `${header + gameOneString + footer}`;

GameOne.prototype.checkRadioButton = function (radioName) {
  const radioButtons = this.form.querySelectorAll(`input[name=${radioName}]`);
  for (const radio of radioButtons) {
    if (radio.checked) {
      return true;
    }
  }
  return false;
};

GameOne.prototype.countCheckedButtons = function () {
  if (this.checkRadioButton(`question1`) && this.checkRadioButton(`question2`)) {
    event.preventDefault();
    showScreen(gameTwo);
  }
};

const gameOne = new GameOne();
export default gameOne.element;
