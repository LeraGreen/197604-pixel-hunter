import AbstractView from '../../view.js';
import footer from '../footer/footer-template.js';
import header from '../header/header-template.js';
import statsIcons from '../stats/stats-icons.js';
import {calcPoints, makeArrOfCorrectAnswers, calcAnswers, calcCorrectAnswersPoints, calcItemPoints, settings} from '../../data/data.js';

export default class StatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  bind() {
    const backButton = this.element.querySelector(`.header__back`);
    backButton.addEventListener(`click`, () => {
      this.onBackButtonClick();
    });
  }

  get template() {
    return `
      ${header(this.state)}
      <div class="result">
        <h1>${this.state.lives === 0 ? `FAIL` : `Победа!`}</h1>
        ${this.getTableResult()}
      </div>
      ${footer}`.trim();
  }

  getTableResult() {
    return `<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${statsIcons(this.state)}
          </ul>
        </td>
        ${this.state.lives === 0 ? `` : `<td class="result__points">×&nbsp;100</td>
        <td class="result__total">${calcCorrectAnswersPoints(makeArrOfCorrectAnswers(this.state))}</td>`}
      </tr>
      ${this.state.lives === 0 ? `` : this.getBonuses()}
      ${this.state.lives === 0 ? `` : `<tr>
        <td colspan="5" class="result__total  result__total--final">${calcPoints(this.state)}</td>
      </tr>` }
    </table>`;
  }

  getBonuses() {
    return `
      ${calcAnswers(this.state, `fast`) === 0 ? `` : `<tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${calcAnswers(this.state, `fast`)}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${calcItemPoints(calcAnswers(this.state, `fast`))}</td>
      </tr>`}
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.state.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${calcItemPoints(this.state.lives)}</td>
      </tr>
      ${calcAnswers(this.state, `slow`) === 0 ? `` : `<tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${calcAnswers(this.state, `slow`)}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${calcItemPoints(calcAnswers(this.state, `slow`))}</td>
      </tr>`}`;
  }

  onBackButtonClick() {

  }
}
