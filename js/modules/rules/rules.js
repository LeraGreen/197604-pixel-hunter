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
    initialState.answers = [];
    const gameScreen = new GameScreen(questions, initialState);
    showScreen(gameScreen.changeLevel(questions, initialState.currentQuestion));
  };
  return rulesScreen;
};
