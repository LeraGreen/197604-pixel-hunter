import AbstractView from '../../view.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import {createImg} from '../utils.js';
import gameThreeString from './game-three-template.js';
import {initialState, questions} from '../../data/data.js';

export default class GameThreeView extends AbstractView {
  get template() {
    return `${header(initialState)}${gameThreeString(questions[2])}${footer}`.trim();
  }

  bind() {
    const gameOptions = this.element.querySelectorAll(`.game__option`);
    for (const option of gameOptions) {
      option.addEventListener(`click`, () => {
        this.changeScreen();
      });
    }

    const containers = this.element.querySelectorAll(`.game__option`);
    createImg(containers, questions[2]);

    const backButton = this.element.querySelector(`.header__back`);
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });
  }

  changeScreen() {

  }

  onBackButtonClick() {

  }
}

