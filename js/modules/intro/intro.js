import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import IntroView from './intro-view.js';


export default () => {
  const introScreen = new IntroView();
  introScreen.onClick = () => {
    showScreen(greetingScreen());
  };
  return introScreen;
};

