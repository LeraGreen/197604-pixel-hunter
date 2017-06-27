import GameOneView from '../gameOne/game-one-view.js';
import GameTwoView from '../gameTwo/game-two-view.js';
import GameThreeView from '../gameThree/game-three-view.js';
import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import statsScreen from '../stats/stats.js';
import {initialState, settings, checkAnswers, checkAnswer, checkAnswersFromThree} from '../../data/data.js';
import introScreen from '../intro/intro.js';

export default class GameScreen {
  constructor(state) {
    this.state = state;
  }

  changeLevel(questions, number) {
    this.number = number;
    this.questions = questions;
    this.currentQuestion = initialState.currentQuestion;
    switch (questions[number].type) {
      case `gameOne`:
        this.game = new GameOneView(questions[number]);
        break;
      case `gameTwo`:
        this.game = new GameTwoView(questions[number]);
        break;
      case `gameThree`:
        this.game = new GameThreeView(questions[number]);
        break;
    }
    this.game.onBackButtonClick = () => {
      showScreen(greetingScreen());
    };
    this.game.changeScreen = () => {
      if (this.number < settings.screens - 1) {
        this.currentQuestion = ++this.number;
        showScreen(this.changeLevel(this.questions, this.currentQuestion));
      } else {
        showScreen(statsScreen());
      }
    };
    return this.game;
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

