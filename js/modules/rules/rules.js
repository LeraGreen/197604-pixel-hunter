import {showScreen} from '../utils.js';
import gameOneScreen from '../gameOne/game-one.js';
import greetingScreen from '../greeting/greeting.js';
import RulesView from './rules-view.js';

export default() => {
  const rulesScreen = new RulesView();
  rulesScreen.onClick = () => {
    showScreen(greetingScreen());
  };
  rulesScreen.submitForm = () => {
    showScreen(gameOneScreen());
  };
  rulesScreen.changeDisabled = (button, input) => {
    if (input.value === ``) {
      button.setAttribute(`disabled`, `disabled`);
    } else {
      button.removeAttribute(`disabled`);
    }
  };
  return rulesScreen;
};
