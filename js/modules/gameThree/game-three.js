import {showScreen} from '../utils.js';
import statsScreen from '../stats/stats.js';
import greetingScreen from '../greeting/greeting.js';
import GameThreeView from './game-three-view.js';

export default () => {
  const gameThreeScreen = new GameThreeView();
  gameThreeScreen.onClick = () => {
    showScreen(greetingScreen());
  };
  gameThreeScreen.changeScreen = () => {
    showScreen(statsScreen());
  };
  return gameThreeScreen;
};
