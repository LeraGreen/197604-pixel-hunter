import {showScreen} from '../../modules/utils.js';
import IntroScreen from '../../modules/intro/intro.js';
import {createQuestions} from '../../data/data.js';
import GreetingScreen from '../../modules/greeting/greeting.js';
import RulesScreen from '../../modules/rules/rules.js';

// showScreen(introScreen());
// createQuestions();

export default class Application {

  static init() {
    createQuestions();
  }

  static showIntro() {
    const introScreen = new IntroScreen();
    introScreen.init();
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    greetingScreen.init();
  }

  static showRules() {
    const rulesScreen = new RulesScreen();
    rulesScreen.init();
  }

  // static showWelcome() {
  //   new GreetingScreen().init();
  // }
  //
  static showGame() {
    console.log(`q`);
    // newGameScreen.init();
  }
  //
  // static showStats(stats) {
  //   statsScreen.init(stats);
  // }

}
