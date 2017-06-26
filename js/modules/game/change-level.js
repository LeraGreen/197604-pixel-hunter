import GameOneView from '../gameOne/game-one-view.js';
import GameTwoView from '../gameTwo/game-two-view.js';
import GameThreeView from '../gameThree/game-three-view.js';
import {showScreen} from '../utils.js';
import greetingScreen from '../greeting/greeting.js';
import statsScreen from '../stats/stats.js';
import {initialState, settings, checkAnswers, checkAnswer} from '../../data/data.js';
import introScreen from '../intro/intro.js';

export default function changeLevel(questions, number) {
  let currentQuestion = initialState.currentQuestion;
  let game;
  switch (questions[number].type) {
    case `gameOne`:
      game = new GameOneView(questions[number]);
      break;
    case `gameTwo`:
      game = new GameTwoView(questions[number]);
      break;
    case `gameThree`:
      game = new GameThreeView(questions[number]);
      break;
  }
  game.onBackButtonClick = () => {
    showScreen(greetingScreen());
  };
  game.onAnswer = (answer, question) => {
    switch (question.type) {
      case `gameTwo`:
        checkAnswer(question.answers, answer);
        break;
      case `gameOne`:
        checkAnswers(question.answers, answer);
        break;
    }
    console.log(answer, question)
    // const result = checkAnswer(questions[number], answer);
  }
  game.changeScreen = () => {
    if (number < settings.screens - 1) {
      currentQuestion = ++number;
      showScreen(changeLevel(questions, currentQuestion));
    } else {
      showScreen(statsScreen());
    }
  };
  return game;
}

// export default class GameScreen {
//   constructor(state) {
//     this.state = state;
//   }
//
//   init() {
//     showScreen(introScreen());
//   }
//
//   tickTimer() {
//
//   }
//
//   changeLevel(questions, number) {
//     let currentQuestion = initialState.currentQuestion;
//     let game;
//     switch (questions[number].type) {
//       case `gameOne`:
//         game = new GameOneView(questions[number]);
//         break;
//       case `gameTwo`:
//         game = new GameTwoView(questions[number]);
//         break;
//       case `gameThree`:
//         game = new GameThreeView(questions[number]);
//         break;
//     }
//     game.onBackButtonClick = () => {
//       showScreen(greetingScreen());
//     };
//     game.changeScreen = () => {
//       if (number < settings.screens - 1) {
//         currentQuestion = ++number;
//         showScreen(changeLevel(questions, currentQuestion));
//       } else {
//         showScreen(statsScreen());
//       }
//     };
//     return game;
//   }
//   onAnswer(answer) {
//
//   }
//
//
// }

