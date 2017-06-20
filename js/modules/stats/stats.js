import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import StatsView from './stats-view.js';

const statsScreen = new StatsView();
statsScreen.onClick = () => {
  const greeting = greetingScreen();
  showScreen(greeting.element);
};

export default () => statsScreen;
