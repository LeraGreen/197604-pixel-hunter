import {createArray, showScreen, createContent} from '../utils.js';
import greeting from '../greeting/greeting.js';
import footer from '../footer/footer-template.js';
import header from '../header/header-template.js';
import statsString from './stats-template.js';

const statsTemplate = `${header}${statsString}${footer}`;
const statsContent = createContent(statsTemplate);
const statsArray = createArray(statsContent.childNodes);
const statsBackButton = statsContent.querySelector(`.header__back`);
statsBackButton.addEventListener(`click`, () => showScreen(greeting));

export default statsArray;
