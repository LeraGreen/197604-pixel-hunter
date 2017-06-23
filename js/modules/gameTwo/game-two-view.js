import AbstractView from '../../view.js';
import {createImg} from '../utils.js';
import {initialState, questions} from '../../data/data.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameTwoString from './game-two-template.js';


export default class GameTwoView extends AbstractView {
  get template() {
    return `${header(initialState)}${gameTwoString(questions[0])}${footer}`.trim();
  }

  bind() {
    const answers = this.element.querySelectorAll(`.game__answer input`);
    const containers = this.element.querySelectorAll(`.game__option`);
    createImg(containers, questions[0]);
    const backButton = this.element.querySelector(`.header__back`);
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });
    for (const answer of answers) {
      answer.addEventListener(`change`, () => {
        this.change();
      });
    }
  }

  onBackButtonClick() {

  }

  change() {

  }
}
