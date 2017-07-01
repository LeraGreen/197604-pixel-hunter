import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import StatsView from './stats-view.js';

export default (state) => {
  const statsScreen = new StatsView(state);
  statsScreen.onBackButtonClick = () => {
    showScreen(greetingScreen());
  };
  return statsScreen;
};
