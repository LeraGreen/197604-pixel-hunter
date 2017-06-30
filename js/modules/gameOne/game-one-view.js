import AbstractView from '../../view.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameOneString from './game-one-template.js';
import {createImg} from '../utils.js';
import {initialState} from '../../data/data.js';

export default class GameOneView extends AbstractView {
  constructor(question, initialState) {
    super();
    this.question = question;
    this.answers = [];
    this.initialState = initialState;
  }
  get template() {
    return `${header(this.initialState)}${gameOneString(this.question)}${footer}`.trim();
  }

  bind() {
    const containers = this.element.querySelectorAll(`.game__option`);
    const backButton = this.element.querySelector(`.header__back`);
    this.form = this.element.querySelector(`.game__content`);
    createImg(containers, this.question);
    this.timerContainer = this.element.querySelector(`.game__timer`);
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
      this.onAnswer(this.question, this.answers);
      this.changeScreen();
    }
  }

  updateTimer(state) {
    let timerContainer = this.element.querySelector(`.game__timer`);
    if (timerContainer === null) {
      timerContainer = document.querySelector(`.game__timer`);
    }
    timerContainer.textContent = state.time;
  }
}
