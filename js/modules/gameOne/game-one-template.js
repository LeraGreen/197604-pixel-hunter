import statsIcons from '../stats/stats-icons.js';
export default gameOneString;

const gameOneString = (question, state) => `<div class="game">
    <p class="game__task">${question.question}</p>
    <form class="game__content ${question.mod}">
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
        ${statsIcons(state)}
      </ul>
    </div>
  </div>`;
