import GameOneView from '../gameOne/game-one-view.js';
import GameTwoView from '../gameTwo/game-two-view.js';
import GameThreeView from '../gameThree/game-three-view.js';
import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import statsScreen from '../stats/stats.js';
import {initialState, settings, checkAnswers, checkAnswer, checkAnswersFromThree, checkAnswerType} from '../../data/data.js';

export default class GameScreen {
  constructor(questions, state) {
    this.questions = questions;
    this.state = state;
    this.currentQuestion = initialState.currentQuestion;
  }

  tickTimer() {
    this.state = Object.assign({}, this.state, {
      time: this.state.time + 1
    });
    this.view.updateTimer(this.state.time);

    if (this.state.time === 10) {
      this.view.onAnswer(false, this.questions[this.currentQuestion]);
      this.view.changeScreen();
      return;
    }

    this.timeout = setTimeout(() => this.tickTimer(), 1000);
  }

  stopTimer() {
    clearTimeout(this.timeout);
    this.state = Object.assign({}, this.state, {
      time: 0
    });
  }

  changeLevel(questions, number) {
    this.number = number;
    this.questions = questions;
    switch (questions[number].type) {
      case `gameOne`:
        this.view = new GameOneView(questions[number], this.state);
        this.tickTimer();
        break;
      case `gameTwo`:
        this.view = new GameTwoView(questions[number], this.state);
        this.tickTimer();
        break;
      case `gameThree`:
        this.view = new GameThreeView(questions[number], this.state);
        this.tickTimer();
        break;
    }

    this.view.onBackButtonClick = () => {
      this.stopTimer();
      showScreen(greetingScreen());
    };

    this.view.changeScreen = () => {
      this.stopTimer();

      if (this.number < settings.screens - 1) {
        this.currentQuestion = ++this.number;
        showScreen(this.changeLevel(this.questions, this.currentQuestion));
      } else {
        showScreen(statsScreen());
      }
    };

    this.view.onAnswer = (answer, question) => {
      let result;
      switch (question.type) {
        case `gameTwo`:
          result = checkAnswer(question.answers, answer);
          break;
        case `gameOne`:
          result = checkAnswers(question.answers, answer);
          break;
        case `gameThree`:
          result = checkAnswersFromThree(question.answers, question.searchType, answer);
      }
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
  }

  deleteLives() {
    if (this.state.lives === 0) {
      this.stopTimer();
      showScreen(statsScreen());
    }
    this.state = Object.assign({}, this.state, {
      lives: this.state.lives - 1
    });
  }
}

