import {showScreen} from '../utils.js';
import statsScreen from '../stats/stats.js';
import greetingScreen from '../greeting/greeting.js';
import GameThreeView from './game-three-view.js';

const gameThreeScreen = new GameThreeView();
gameThreeScreen.onClick = () => {
  const greeting = greetingScreen();
  showScreen(greeting.element);
};
gameThreeScreen.changeScreen = () => {
  const stats = statsScreen();
  showScreen(stats.element);
};

export default () => gameThreeScreen;
