import {createArray, showScreen, createContent} from '../utils.js';
import gameThree from '../gameThree/game-three.js';
import header from '../header/header-template.js';
import footer from '../footer/footer-template.js';
import gameTwoString from './game-two-template.js';
import greeting from '../greeting/greeting.js';

const gameTwoTemplate = `${header}${gameTwoString}${footer}`;
const gameTwoContent = createContent(gameTwoTemplate);
const gameTwoArray = createArray(gameTwoContent.childNodes);
const gameTwoAnswers = gameTwoContent.querySelectorAll(`.game__answer input`);
const gameTwoBackButton = gameTwoContent.querySelector(`.header__back`);
gameTwoBackButton.addEventListener(`click`, () => showScreen(greeting));
for (const answer of gameTwoAnswers) {
  answer.addEventListener(`change`, () => (showScreen(gameThree)));
}

export default gameTwoArray;
