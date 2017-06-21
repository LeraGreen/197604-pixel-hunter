import {showScreen} from '../utils.js';
import gameThreeScreen from '../gameThree/game-three.js';
import greetingScreen from '../greeting/greeting.js';
import GameTwoView from './game-two-view.js';

export default () => {
  const gameTwoScreen = new GameTwoView();
  gameTwoScreen.onClick = () => {
    showScreen(greetingScreen());
  };
  gameTwoScreen.change = () => {
    showScreen(gameThreeScreen());
  };
  return gameTwoScreen;
};
