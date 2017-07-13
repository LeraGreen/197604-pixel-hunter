import {showScreen} from './modules/utils.js';
import introScreen from './modules/intro/intro.js';
import {createQuestions} from './data/data.js';

showScreen(introScreen());
createQuestions();
