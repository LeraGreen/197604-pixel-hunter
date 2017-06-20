import AbstractView from '../../view.js';
import footer from '../footer/footer-template.js';
import header from '../header/header-template.js';
import statsString from './stats-template.js';
import {initialState} from '../../data/data.js';

export default class StatsView extends AbstractView {
  get template() {
    return `${header(initialState)}${statsString}${footer}`.trim();
  }

  bind() {
    const backButton = this.element.querySelector(`.header__back`);
    backButton.addEventListener(`click`, () => {
      this.onClick();
    });
  }

  onClick() {

  }
}
