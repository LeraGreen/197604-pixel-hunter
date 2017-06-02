import {createArray, showScreen, createContent} from '../utils.js';
import stats from '../stats/stats.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameThreeString from './game-three-template.js';
import greeting from '../greeting/greeting.js';

const gameThreeTemplate = `${header}${gameThreeString}${footer}`;
const gameThreeContent = createContent(gameThreeTemplate);
const gameThreeArray = createArray(gameThreeContent.childNodes);
const gameThreeOptions = gameThreeContent.querySelectorAll(`.game__option`);
for (const option of gameThreeOptions) {
  option.addEventListener(`click`, () => (showScreen(stats)));
}
const gameThreeBackButton = gameThreeContent.querySelector(`.header__back`);
gameThreeBackButton.addEventListener(`click`, () => showScreen(greeting));

export default gameThreeArray;
