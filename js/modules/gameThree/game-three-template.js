import {initialState} from '../../data/data.js';

export default `<div class="game">
    <p class="game__task">${initialState.questions[2].question}</p>
    <form class="game__content  ${initialState.questions[2].mod}">
      <div class="game__option">
      </div>
      <div class="game__option  game__option--selected">
      </div>
      <div class="game__option">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;
