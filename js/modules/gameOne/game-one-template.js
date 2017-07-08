import {settings} from '../../data/data.js';
import {showAnswerIcons} from '../../modules/utils.js';
export default gameOneString;

const gameOneString = (state, initialState) => `<div class="game">
    <p class="game__task">${state.question}</p>
    <form class="game__content ${state.mod}">
      <div class="game__option">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        ${initialState.answers.length === 0 ? `` : showAnswerIcons(initialState)}
        ${new Array(settings.screens - initialState.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}></li>
      </ul>
    </div>
  </div>`;
