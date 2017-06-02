import {createArray, showScreen, createContent} from '../utils.js';
import rules from '../rules/rules.js';
import footer from '../footer/footer-template.js';
import greetingString from './greeting-template.js';

const greetingTemplate = `${greetingString}${footer}`;
const greetingContent = createContent(greetingTemplate);
const greetingArray = createArray(greetingContent.childNodes);
const greetingButton = greetingContent.querySelector(`.greeting__continue`);
greetingButton.addEventListener(`click`, () => showScreen(rules));

export default greetingArray;
