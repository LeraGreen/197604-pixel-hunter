import IntroScreen from '../../modules/intro/intro.js';
import {createQuestions} from '../../data/data.js';
import GreetingScreen from '../../modules/greeting/greeting.js';
import RulesScreen from '../../modules/rules/rules.js';
import GameScreen from '../../modules/game/game-screen.js';
import StatsScreen from '../../modules/stats/stats.js';
import {questions, initialState, ControllerID} from '../../data/data.js';

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class Application {

  init() {
    createQuestions();
  }

  // setup() {
  //   this.routes = {
  //     [ControllerID.INTRO]: new IntroScreen(),
  //     [ControllerID.GREETING]: new RulesScreen()
  //   };
  //
  //   window.onhashchange = () => {
  //     this.changeController(getControllerIDFromHash(location.hash));
  //   };
  // }

  changeController(route = ``) {
    this.routes[route].init();
  }

  showIntro() {
    const introScreen = new IntroScreen();
    introScreen.init();
    location.hash = ``;
  }

  showGreeting() {
    const greetingScreen = new GreetingScreen();
    greetingScreen.init();
    location.hash = `greeting`;
  }

  showRules() {
    const rulesScreen = new RulesScreen();
    rulesScreen.init();
    location.hash = `rules`;
  }

  showGame() {
    const gameScreen = new GameScreen();
    gameScreen.init();
  }

  showStats(stats) {
    const statsScreen = new StatsScreen(stats);
    statsScreen.init();
  }
}

const app = new Application();
export default app;
