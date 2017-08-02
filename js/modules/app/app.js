import IntroScreen from '../../modules/intro/intro.js';
import {createQuestions} from '../../data/data.js';
import GreetingScreen from '../../modules/greeting/greeting.js';
import RulesScreen from '../../modules/rules/rules.js';
import GameScreen from '../../modules/game/game-screen.js';
import StatsScreen from '../../modules/stats/stats.js';
import {ControllerID} from '../../data/data.js';

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class Application {

  init() {
    createQuestions();
    this.setup();
    this.changeController(getControllerIDFromHash(location.hash));
  }

  setup() {
    this.routes = {
      [ControllerID.INTRO]: new IntroScreen(),
      [ControllerID.GREETING]: new GreetingScreen(),
      [ControllerID.RULES]: new RulesScreen(),
      [ControllerID.GAME]: new GameScreen()
    };

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController(route = ``) {
    this.routes[route].init();
  }

  showIntro() {
    location.hash = ControllerID.INTRO;
  }

  showGreeting() {
    location.hash = ControllerID.GREETING;
  }

  showRules() {
    location.hash = ControllerID.RULES;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showStats(stats) {
    location.hash = ControllerID.SCOREBOARD;
  }
}

const app = new Application();
export default app;
