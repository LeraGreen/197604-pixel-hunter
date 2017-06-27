import AbstractView from '../../view.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameOneString from './game-one-template.js';
import {createImg} from '../utils.js';
import {initialState} from '../../data/data.js';

export default class GameOneView extends AbstractView {
  constructor(question) {
    super();
    this.question = question;
    this.answers = [];
  }
  get template() {
    return `${header(initialState)}${gameOneString(this.question)}${footer}`.trim();
  }

  bind() {
    const containers = this.element.querySelectorAll(`.game__option`);
    const backButton = this.element.querySelector(`.header__back`);
    this.form = this.element.querySelector(`.game__content`);
    createImg(containers, this.question);
    this.form.addEventListener(`change`, () => this.countCheckedButtons());
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });
  }

  onBackButtonClick() {

  }

  checkRadioButton(radioName) {
    const radioButtons = this.form.querySelectorAll(`input[name=${radioName}]`);
    for (const radio of radioButtons) {
      if (radio.checked) {
        this.answers.push(radio.value);
        return true;
      }
    }
    return false;
  }

  countCheckedButtons() {
    if (this.checkRadioButton(`question1`) && this.checkRadioButton(`question2`)) {
      event.preventDefault();
      // this.onAnswer(this.answers, this.question);
      this.changeScreen();
    }
  }
}
