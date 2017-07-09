import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import RulesView from './rules-view.js';
import GameScreen from '../game/game-screen.js';
import {questions, initialState} from '../../data/data.js';

export default () => {
  const rulesScreen = new RulesView();
  rulesScreen.onBackButtonClick = () => {
    showScreen(greetingScreen());
  };
  rulesScreen.submitForm = () => {
    const copyInitialState = Object.assign({}, initialState, {
      answers: []
    });
    const gameScreen = new GameScreen(questions, copyInitialState);
    showScreen(gameScreen.changeLevel(questions, copyInitialState.currentQuestion));
  };
  return rulesScreen;
};
