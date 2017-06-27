import GameOneView from '../gameOne/game-one-view.js';
import GameTwoView from '../gameTwo/game-two-view.js';
import GameThreeView from '../gameThree/game-three-view.js';
import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import statsScreen from '../stats/stats.js';
import {initialState, settings, checkAnswers, checkAnswer, checkAnswersFromThree} from '../../data/data.js';
import introScreen from '../intro/intro.js';

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
    if (this.state.time === 30) {
      this.stopTimer();
    }

    this.timeout = setTimeout(() => this.tickTimer(), 1000);
  }

  stopTimer() {
    clearTimeout(this.timeout);
    this.state = Object.assign({}, this.state, {
      time: 0
    });
    this.view.changeScreen();
  }

  changeLevel(questions, number) {
    this.number = number;
    this.questions = questions;
    switch (questions[number].type) {
      case `gameOne`:
        this.view = new GameOneView(questions[number]);
        this.tickTimer();
        break;
      case `gameTwo`:
        this.view = new GameTwoView(questions[number]);
        this.tickTimer();
        break;
      case `gameThree`:
        this.view = new GameThreeView(questions[number]);
        this.tickTimer();
        break;
    }
    this.view.onBackButtonClick = () => {
      showScreen(greetingScreen());
    };
    this.view.changeScreen = () => {
      if (this.number < settings.screens - 1) {
        this.currentQuestion = ++this.number;
        showScreen(this.changeLevel(this.questions, this.currentQuestion));
      } else {
        showScreen(statsScreen());
      }
    };
    return this.view;
  }


  onAnswer(answer, question) {
    switch (question.type) {
      case `gameTwo`:
        this.result = checkAnswer(question.answers, answer);
        break;
      case `gameOne`:
        this.result = checkAnswers(question.answers, answer);
        break;
      case `gameThree`:
        this.result = checkAnswersFromThree(question.answers, question.searchType, answer);
    }
  }
}

