import {showScreen} from '../utils.js';
import StatsView from './stats-view.js';


import Application from '../../modules/app/app.js';

export default class StatsScreen {
  constructor(state) {
    this.view = new StatsView(state);
  }

  init() {
    this.view.onBackButtonClick = () => {
      Application.showGreeting();
    };
    showScreen(this.view);
  }
}
