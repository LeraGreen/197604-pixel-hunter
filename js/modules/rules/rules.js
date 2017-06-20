import {showScreen} from '../utils.js';
import gameOneScreen from '../gameOne/game-one.js';
import greetingScreen from '../greeting/greeting.js';
import RulesView from './rules-view.js';

const rulesScreen = new RulesView();
rulesScreen.onClick = () => {
  const greeting = greetingScreen();
  showScreen(greeting.element);
};
rulesScreen.submitForm = () => {
  const gameOne = gameOneScreen();
  showScreen(gameOne.element);
};
rulesScreen.changeDisabled = (button, input) => {
  if (input.value === ``) {
    button.setAttribute(`disabled`, `disabled`);
  } else {
    button.removeAttribute(`disabled`);
  }
};

export default () => rulesScreen;
