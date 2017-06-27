export const initialState = {
  lives: 3,
  time: 0,
  nameUser: ``,
  currentQuestion: 0,
  answers: []
};

export const settings = {
  maxLives: 3,
  minLives: 0,
  screens: 10,
  timeToAnswer: 30
};

const AnswerType = {
  SLOW: `slow`,
  FAST: `fast`,
  CORRECT: `correct`,
  WRONG: `wrong`
};

export const points = {};
points[AnswerType.WRONG] = 0;
points[AnswerType.SLOW] = 50;
points[AnswerType.CORRECT] = 100;
points[AnswerType.FAST] = 150;

export const questions = [
  {
    type: `gameTwo`,
    mod: `game__content--wide`,
    question: `Угадай, фото или рисунок`,
    answers: [
      {
        img: `https://k42.kn3.net/CF42609C8.jpg`,
        type: `paint`
      }
    ]
  },
  {
    type: `gameOne`,
    mod: ``,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `photo`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      }
    ]
  },
  {
    type: `gameThree`,
    mod: `game__content--triple`,
    question: `Найдите рисунок среди изображений`,
    searchType: `paint`,
    answers: [
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `photo`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      }
    ]
  },
  {
    type: `gameTwo`,
    mod: `game__content--wide`,
    question: `Угадай, фото или рисунок`,
    answers: [
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `photo`
      }
    ]
  },
  {
    type: `gameOne`,
    mod: ``,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        img: `http://i.imgur.com/1KegWPz.jpg`,
        type: `photo`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      }
    ]
  },
  {
    type: `gameThree`,
    mod: `game__content--triple`,
    question: `Найдите фото среди изображений`,
    searchType: `photo`,
    answers: [
      {
        img: `https://k42.kn3.net/CF42609C8.jpg`,
        type: `paint`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      }
    ]
  },
  {
    type: `gameTwo`,
    mod: `game__content--wide`,
    question: `Угадай, фото или рисунок`,
    answers: [
      {
        img: `https://k32.kn3.net/5C7060EC5.jpg`,
        type: `paint`
      }
    ]
  },
  {
    type: `gameOne`,
    mod: ``,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `photo`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      }
    ]
  },
  {
    type: `gameThree`,
    mod: `game__content--triple`,
    question: `Найдите рисунок среди изображений`,
    searchType: `paint`,
    answers: [
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `photo`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      },
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `photo`
      }
    ]
  },
  {
    type: `gameOne`,
    mod: ``,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        type: `photo`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: `photo`
      }
    ]
  }
];

export const calcLivesPoints = (state) => {
  let questionsPoints = 0;
  for (let i = state.lives; i > 0; i--) {
    questionsPoints += 50;
  }
  return questionsPoints;
};

export const checkAnswerType = (time) => {
  let answer;
  if (time === -1) {
    answer = AnswerType.WRONG;
  }
  if (time !== -1 && time < 10) {
    answer = AnswerType.FAST;
  }
  if (time > 20 && time <= 30) {
    answer = AnswerType.SLOW;
  }
  if (time >= 10 && time <= 20) {
    answer = AnswerType.CORRECT;
  }
  console.log(answer);
  return answer;
};

export const checkAnswer = (questionsList, answer) => {
  return (questionsList[0].type === answer);
};

export const checkAnswersFromThree = (questionsList, findType, answerNum) => {
  return (findType === questionsList[answerNum].type);
};

export const checkAnswers = (state, answer) => {
  for (let i = 0; i < state.length; i++) {
    if (answer[i] !== state[i].type) {
      return false;
    }
  }
  return true;
};


