import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import IntroView from './intro-view.js';
import Application from '../../modules/app/app.js';

// export default () => {
//   const introScreen = new IntroView();
//   introScreen.onNextButtonClick = () => {
//     showScreen(greetingScreen());
//   };
//   return introScreen;
// };


export default class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    this.view.onNextButtonClick = () => {
      Application.showGreeting();
    };
    showScreen(this.view);
    // introScreen.init();
    // this.view.onNextButtonClick = () => {
    //   showScreen(greetingScreen());
    // };
  }
}

