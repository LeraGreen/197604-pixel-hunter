import {showScreen} from '../utils.js';
import IntroView from './intro-view.js';
import Application from '../../modules/app/app.js';

export default class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    this.view.onNextButtonClick = () => {
      Application.showGreeting();
    };
    showScreen(this.view);
  }
}

