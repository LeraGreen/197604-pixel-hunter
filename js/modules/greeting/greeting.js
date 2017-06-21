import {showScreen} from '../utils.js';
import rulesScreen from '../rules/rules.js';
import GreetingView from './greeting-view.js';

export default () => {
  const greetingScreen = new GreetingView();
  greetingScreen.onClick = () => {
    showScreen(rulesScreen());
  };
  return greetingScreen;
};
