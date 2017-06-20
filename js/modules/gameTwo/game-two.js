import {showScreen} from '../utils.js';
import gameThreeScreen from '../gameThree/game-three.js';
import greetingScreen from '../greeting/greeting.js';
import GameTwoView from './game-two-view.js';

const gameTwoScreen = new GameTwoView();
gameTwoScreen.onClick = () => {
  const greeting = greetingScreen();
  showScreen(greeting.element);
};
gameTwoScreen.change = () => {
  showScreen(gameThreeScreen());
};

export default () => gameTwoScreen;
