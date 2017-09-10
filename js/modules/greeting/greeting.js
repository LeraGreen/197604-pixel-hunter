import {showScreen} from '../utils.js';
import GreetingView from './greeting-view.js';
import Application from '../../modules/app/app.js';

export default class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    this.view.onNextButtonClick = () => {
      Application.showRules();
    };
    showScreen(this.view);
  }
}
