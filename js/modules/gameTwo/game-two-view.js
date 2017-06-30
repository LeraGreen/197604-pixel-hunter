import AbstractView from '../../view.js';
import {createImg} from '../utils.js';
// import {initialState} from '../../data/data.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameTwoString from './game-two-template.js';


export default class GameTwoView extends AbstractView {
  constructor(question, initialState) {
    super();
    this.initialState = initialState;
    this.question = question;
  }
  get template() {
    return `${header(this.initialState)}${gameTwoString(this.question)}${footer}`.trim();
  }

  bind() {
    const answers = this.element.querySelectorAll(`.game__answer input`);
    const containers = this.element.querySelectorAll(`.game__option`);
    this.timerContainer = this.element.querySelector(`.game__timer`);
    console.log(this.timerContainer);
    createImg(containers, this.question);
    const backButton = this.element.querySelector(`.header__back`);
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });
    for (const answer of answers) {
      answer.addEventListener(`change`, () => {
        const answerValue = answer.value;
        if (answer) {
          this.onAnswer(this.question, answerValue);
        }

        this.changeScreen();
      });
    }
  }

  onBackButtonClick() {

  }

  onAnswer(answer) {

  }

  change() {

  }

  updateTimer(state) {
    let timerContainer = this.element.querySelector(`.game__timer`);
    if (timerContainer === null) {
      timerContainer = document.querySelector(`.game__timer`);
    }
    timerContainer.textContent = state.time;
  }
}
