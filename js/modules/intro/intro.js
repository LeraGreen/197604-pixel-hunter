import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import IntroView from './intro-view.js';


const introScreen = new IntroView();
introScreen.onClick = () => {
  const greeting = greetingScreen();
  showScreen(greeting.element);
};

export default () => introScreen;
