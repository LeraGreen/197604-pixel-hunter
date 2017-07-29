import IntroScreen from '../../modules/intro/intro.js';
import {createQuestions} from '../../data/data.js';
import GreetingScreen from '../../modules/greeting/greeting.js';
import RulesScreen from '../../modules/rules/rules.js';
import GameScreen from '../../modules/game/game-screen.js';
import StatsScreen from '../../modules/stats/stats.js';
import {questions, initialState} from '../../data/data.js';

export default class Application {

  static init() {
    this.gameScreen = new GameScreen(questions, initialState);
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

  static showGame() {
    this.gameScreen.init();
  }

  static showStats(stats) {
    const statsScreen = new StatsScreen(stats);
    statsScreen.init();
  }
}
