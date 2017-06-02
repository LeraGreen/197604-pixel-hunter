import {createArray, showScreen, createContent} from '../utils.js';
import greeting from '../greeting/greeting.js';
import introString from './intro-template.js';

const introTemplate = `${introString}`;
const introContent = createContent(introTemplate);
const introArray = createArray(introContent.childNodes);
const introButton = introContent.querySelector(`.intro__asterisk`);
introButton.addEventListener(`click`, () => showScreen(greeting));

export default introArray;
