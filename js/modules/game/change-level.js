import GameOneView from '../gameOne/game-one-view.js';
import GameTwoView from '../gameTwo/game-two-view.js';
import GameThreeView from '../gameThree/game-three-view.js';
import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import statsScreen from '../stats/stats.js';
import {initialState, settings} from '../../data/data.js';

export default function changeLevel(questions, number) {
  let currentQuestion = initialState.currentQuestion;
  let game;
  switch (questions[number].type) {
    case `gameOne`:
      game = new GameOneView(questions[number]);
      game.countCheckedButtons = () => {
        if (game.checkRadioButton(`question1`) && game.checkRadioButton(`question2`)) {
          event.preventDefault();
          game.changeScreen();
        }
      };
      break;
    case `gameTwo`:
      game = new GameTwoView(questions[number]);
      break;
    case `gameThree`:
      game = new GameThreeView(questions[number]);
      break;
  }
  game.onBackButtonClick = () => {
    showScreen(greetingScreen());
  };
  game.changeScreen = () => {
    if (number < settings.screens - 1) {
      currentQuestion = ++number;
      showScreen(changeLevel(questions, currentQuestion));
    } else {
      showScreen(statsScreen());
    }
  };
  return game;
}


