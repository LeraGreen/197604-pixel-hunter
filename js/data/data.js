export const initialState = {
  lives: 3,
  time: 30,
  nameUser: ``,
  currentQuestion: 0,
  answers: [],
  allPoints: 0,
  correctAnswerPoints: 0,
  wrong: 0,
  fast: 0,
  slow: 0
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

export const ScreenType = {
  ONE: `gameOne`,
  TWO: `gameTwo`,
  THREE: `gameThree`
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
        type: `paint`
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

export const makeArrOfCorrectAnswers = (state) => {
  return state.answers.filter(function (item) {
    return item !== AnswerType.WRONG;
  });
};

export const calcCorrectAnswersPoints = (state, arr) => {
  state.correctAnswerPoints = arr.length * 100;
};

export const calcAllPoints = (state) => {
  const answers = state.answers;
  let stats = 0;
  for (let answer of answers) {
    stats = stats + points[answer];
  }
  stats = stats + calcItemPoints(state.lives);
  state.allPoints = stats;
  return state;
};

export const calcItemPoints = (num) => {
  let itemPoints = 0;
  for (let i = num; i > 0; i--) {
    itemPoints += 50;
  }
  return itemPoints;
};

export const checkAnswerType = (time) => {
  let answer;
  if (time < 0) {
    answer = AnswerType.WRONG;
  }
  if (time >= 0 && time < 10) {
    answer = AnswerType.FAST;
  }
  if (time > 20 && time <= 30) {
    answer = AnswerType.SLOW;
  }
  if (time >= 10 && time <= 20) {
    answer = AnswerType.CORRECT;
  }
  if (time > settings.timeToAnswer) {
    throw new RangeError(`Can't set time more then timeToAnswer`);
  }
  return answer;
};


export const checkAnswer = (state, answer) => {
  let result;
  switch (state.type) {
    case ScreenType.ONE:
      for (let i = 0; i < state.answers.length; i++) {
        if (answer[i] !== state.answers[i].type) {
          return (result = false);
        }
      }
      return (result = true);
    case ScreenType.TWO:
      result = (state.answers[0].type === answer);
      break;
    case ScreenType.THREE:
      result = (state.searchType === state.answers[answer].type);
  }
  return result;
};

export const tickTimer = (state) => {
  if (state.time < 0) {
    throw new RangeError(`Can't set time more then timeToAnswer`);
  }

  state = Object.assign({}, state, {
    time: state.time - 1
  });
  return state;
};

export const clearTimer = (state) => {
  state = Object.assign({}, state, {
    time: settings.timeToAnswer
  });
  return state;
};

export const updateLives = (state) => {
  if (state.lives === 0) {
    return state;
  }

  if (state.lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }

  state = Object.assign({}, state, {
    lives: state.lives - 1
  });
  return state;
};

export const calcAnswers = (state, answerType) => {
  const answers = state.answers;
  let num = 0;
  for (const answer of answers) {
    if (answer === answerType) {
      num += 1;
    }
  }
  state[answerType] = num;
  return state;
};


