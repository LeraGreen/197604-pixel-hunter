import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import RulesView from './rules-view.js';
import GameScreen from '../game/game-screen.js';
import {questions, initialState} from '../../data/data.js';

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
      // const gameScreen = new GameScreen(questions, initialState);
      // showScreen(gameScreen.changeLevel(questions, initialState.currentQuestion));
    };
    showScreen(this.view);
  }
}
