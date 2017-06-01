import createEl from '../modules/createEl.js';
import showScreen from '../modules/showScreen.js';
import GameTwo from './game-two.js';
import header from '../templates/header-template.js';
import footer from '../templates/footer-template.js';
import gameOneString from '../templates/game-one-template.js';
import Greeting from './greeting.js';

function GameOne() {
  this.element = createEl(this.template);
  this.form = this.element.querySelector(`.game__content`);
  this.form.addEventListener(`change`, () => this.countCheckedButtons());
  this.backButton = this.element.querySelector(`.header__back`);
  this.backButton.addEventListener(`click`, () => showScreen(new Greeting()));
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
    showScreen(new GameTwo());
  }
};

export default GameOne;
