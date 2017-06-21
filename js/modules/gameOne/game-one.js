import {showScreen} from '../utils.js';
import gameTwoScreen from '../gameTwo/game-two.js';
import greetingScreen from '../greeting/greeting.js';
import GameOneView from './game-one-view.js';

export default () => {
  const gameOneScreen = new GameOneView();
  gameOneScreen.onClick = () => {
    showScreen(greetingScreen());
  };
  gameOneScreen.countCheckedButtons = () => {
    if (gameOneScreen.checkRadioButton(`question1`) && gameOneScreen.checkRadioButton(`question2`)) {
      event.preventDefault();
      showScreen(gameTwoScreen());
    }
  };

  gameOneScreen.checkRadioButton = function (radioName) {
    const radioButtons = this.form.querySelectorAll(`input[name=${radioName}]`);
    for (const radio of radioButtons) {
      if (radio.checked) {
        return true;
      }
    }
    return false;
  };
  return gameOneScreen;
};
