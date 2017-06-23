import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import RulesView from './rules-view.js';
import changeLevel from '../game/change-level.js';

export default() => {
  const rulesScreen = new RulesView();
  rulesScreen.onBackButtonClick = () => {
    showScreen(greetingScreen());
  };
  rulesScreen.submitForm = () => {
    showScreen(changeLevel(`gameOne`));
  };
  return rulesScreen;
};
