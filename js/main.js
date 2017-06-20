import {showScreen} from './modules/utils.js';
import introScreen from './modules/intro/intro.js';

const intro = introScreen();
showScreen(intro.element);
