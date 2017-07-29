import {showScreen} from '../utils.js';
import RulesView from './rules-view.js';
import {initialState} from '../../data/data.js';

import Application from '../../modules/app/app.js';

export default class RulesScreen {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    this.view.onBackButtonClick = () => {
      Application.showGreeting();
    };
    this.view.submitForm = () => {
      initialState.answers = [];
      Application.showGame();
    };
    showScreen(this.view);
  }
}
