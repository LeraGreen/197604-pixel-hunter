import AbstractView from '../../view.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import {createImg} from '../utils.js';
import gameThreeString from './game-three-template.js';
import {initialState} from '../../data/data.js';

export default class GameThreeView extends AbstractView {
  constructor(question) {
    super();
    this.question = question;
  }
  get template() {
    return `${header(initialState)}${gameThreeString(this.question)}${footer}`.trim();
  }

  bind() {
    const gameOptions = this.element.querySelectorAll(`.game__option`);
    for (let i = 0; i < gameOptions.length; i++) {
      gameOptions[i].addEventListener(`click`, () => {
        this.onAnswer(i, this.question);
        this.changeScreen();
      });
    }

    const containers = this.element.querySelectorAll(`.game__option`);
    createImg(containers, this.question);

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

