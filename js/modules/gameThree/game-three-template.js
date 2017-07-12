import {statsIcons} from '../stats/stats-icons.js';

const gameThreeString = (question, state) => `<div class="game">
    <p class="game__task">${question.question}</p>
    <form class="game__content  ${question.mod}">
      <div class="game__option">
      </div>
      <div class="game__option  game__option--selected">
      </div>
      <div class="game__option">
      </div>
    </form>
    <div class="stats">
        ${statsIcons(state)}
    </div>
  </div>`;

export default gameThreeString;
