import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import StatsView from './stats-view.js';

export default () => {
  const statsScreen = new StatsView();
  statsScreen.onBackButtonClick = () => {
    showScreen(greetingScreen());
  };
  return statsScreen;
};
