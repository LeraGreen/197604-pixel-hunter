import GameOneView from '../gameOne/game-one-view.js';
import GameTwoView from '../gameTwo/game-two-view.js';
import GameThreeView from '../gameThree/game-three-view.js';
import {showScreen} from '../utils.js';
import {settings, checkAnswer, checkAnswerType, tickTimer, clearTimer, updateLives, ScreenType, questions, initialState} from '../../data/data.js';
import Application from '../../modules/app/app.js';

export default class GameScreen {
  constructor() {
    initialState.answers = [];
    this.questions = questions;
    this.state = initialState;
    this.currentQuestion = this.state.currentQuestion;
  }

  tickTimer() {
    this.view.updateTimer(this.state);
    this.state = tickTimer(this.state);

    if (this.state.time < 0) {
      this.view.onAnswer(false, this.questions[this.currentQuestion]);
      this.deleteLives();
      this.view.changeScreen();
      return;
    }

    this.timeout = setTimeout(() => this.tickTimer(), 1000);
  }

  stopTimer() {
    clearTimeout(this.timeout);
    this.state = clearTimer(this.state);
  }

  init() {
    showScreen(this.changeLevel(this.questions, this.currentQuestion));
  }

  changeLevel(questions, number) {
    this.number = number;
    this.questions = questions;
    switch (questions[number].type) {
      case ScreenType.ONE:
        this.view = new GameOneView(questions[number], this.state);
        break;
      case ScreenType.TWO:
        this.view = new GameTwoView(questions[number], this.state);
        break;
      case ScreenType.THREE:
        this.view = new GameThreeView(questions[number], this.state);
        break;
    }
    this.tickTimer();

    this.view.onBackButtonClick = () => {
      this.stopTimer();
      Application.init();
      Application.showGreeting();
    };

    this.view.changeScreen = () => {
      this.stopTimer();

      if (this.number < settings.screens - 1 && this.state.lives !== 0) {
        this.currentQuestion = ++this.number;
        this.init();
      } else {
        Application.showStats(this.state);
        Application.init();
      }
    };

    this.view.onAnswer = (question, answer) => {
      const result = checkAnswer(question, answer);
      this.checkPoints(result);
    };

    return this.view;
  }

  checkPoints(result) {
    let time;
    if (result === false) {
      time = -1;
    } else {
      time = this.state.time;
    }
    const answerType = checkAnswerType(time);
    this.state.answers.push(answerType);
    if (answerType === `wrong`) {
      this.deleteLives();
    }
    this.view.changeScreen();
  }

  deleteLives() {
    if (this.state.lives === 0) {
      return;
    }
    this.state = updateLives(this.state);
  }
}

