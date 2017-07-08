import {settings} from '../../data/data.js';
import {showAnswerIcons} from '../../modules/utils.js';
export default gameThreeString;

const gameThreeString = (state, initialState) => `<div class="game">
    <p class="game__task">${state.question}</p>
    <form class="game__content  ${state.mod}">
      <div class="game__option">
      </div>
      <div class="game__option  game__option--selected">
      </div>
      <div class="game__option">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        ${initialState.answers.length === 0 ? `` : showAnswerIcons(initialState)}
        ${new Array(settings.screens - initialState.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}></li>
      </ul>
    </div>
  </div>`;
