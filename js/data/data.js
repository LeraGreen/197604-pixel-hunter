export const initialState = {
  lives: 3,
  time: 30,
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
        type: `paint`
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
        img: `https://media.thequestion.ru/image/with_proportions/744x0/c2cfe70859708eb8aeab11252762c401faf1a92f?url=https%3A%2F%2Fthequestion.s3.eu-central-1.amazonaws.com%2F292%2F383086-fcfd072f.jpeg`,
        type: `paint`
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
        img: `http://artifex.ru/wp-content/uploads/2016/10/Живопись_Стефан-Пабст_06.jpg`,
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
        img: `http://blogcache.artron.net/201104/24/67347_1303647842e3g7.jpg`,
        type: `paint`
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
        img: `https://k42.kn3.net/D2F0370D6.jpg`,
        type: `photo`
      },
      {
        img: `http://www.pirojok.net/uploads/posts/2012-10/1351025457_01.jpg`,
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

export const calcCorrectAnswersPoints = (arr) => {
  return arr.length * 100;
};

export const calcPoints = (state) => {
  const answers = state.answers;
  let stats = 0;
  for (let answer of answers) {
    stats = stats + points[answer];
  }
  stats = stats + calcItemPoints(state.lives);
  return stats;
};

export const calcItemPoints = (num) => {
  return num * 50;
};

export const checkAnswerType = (time) => {
  const answerTime = settings.timeToAnswer - time;
  let answer;
  if (time < 0) {
    answer = AnswerType.WRONG;
  }
  if (answerTime >= 0 && answerTime < 10) {
    answer = AnswerType.FAST;
  }
  if (answerTime > 20 && answerTime <= settings.timeToAnswer) {
    answer = AnswerType.SLOW;
  }
  if (answerTime >= 10 && answerTime <= 20) {
    answer = AnswerType.CORRECT;
  }
  if (time > settings.timeToAnswer) {
    throw new RangeError(`Answer can't take time more then setting`);
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
    throw new RangeError(`Can't set time less then zero`);
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
  return num;
};

export const createQuestions = () => {
  for (let i = 0; i < questions.length; i++) {
    const indexOne = Math.floor(Math.random() * questions.length);
    const indexTwo = Math.floor(Math.random() * questions.length);
    const element = questions[indexOne];
    questions[indexOne] = questions[indexTwo];
    questions[indexTwo] = element;
  }
};


