import AbstractView from '../../view.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameOneString from './game-one-template.js';
import {createImg} from '../utils.js';
import {initialState, questions} from '../../data/data.js';

export default class GameOneView extends AbstractView {
  get template() {
    return `${header(initialState)}${gameOneString(questions[1])}${footer}`.trim();
  }

  bind() {
    const containers = this.element.querySelectorAll(`.game__option`);
    const backButton = this.element.querySelector(`.header__back`);
    this.form = this.element.querySelector(`.game__content`);
    createImg(containers, questions[1]);
    this.form.addEventListener(`change`, () => this.countCheckedButtons());
    backButton.addEventListener(`click`, () => {
      this.onClick();
    });
  }

  onClick() {

  }

  countCheckedButtons() {
  }
}
