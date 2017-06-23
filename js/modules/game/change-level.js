import GameOneView from '../gameOne/game-one-view.js';
import GameTwoView from '../gameTwo/game-two-view.js';
import GameThreeView from '../gameThree/game-three-view.js';
import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import statsScreen from '../stats/stats.js';

export default function changeLevel(screen) {
  let game;
  switch (screen) {
    case `gameOne`:
      game = new GameOneView();
      game.countCheckedButtons = () => {
        if (game.checkRadioButton(`question1`) && game.checkRadioButton(`question2`)) {
          event.preventDefault();
          showScreen(changeLevel(`gameTwo`));
        }
      };
      break;
    case `gameTwo`:
      game = new GameTwoView();
      game.change = () => {
        showScreen(changeLevel(`gameThree`));
      };
      break;
    case `gameThree`:
      game = new GameThreeView();
      game.changeScreen = () => {
        showScreen(statsScreen());
      };
      break;
  }
  game.onBackButtonClick = () => {
    showScreen(greetingScreen());
  };
  return game;
}


