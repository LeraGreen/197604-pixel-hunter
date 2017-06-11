export default gameThreeString;

const gameThreeString = (state) => `<div class="game">
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
