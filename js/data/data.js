export const initialState = {
  lives: 2,
  time: 0,
  nameUser: ``,
  currentQuestion: 0,
  answers: []
};

export const settings = {
  maxLives: 3,
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
        isPhoto: false
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
        isPhoto: true
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true
      }
    ]
  },
  {
    type: `gameThree`,
    mod: `game__content--triple`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        isPhoto: true
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true
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
        isPhoto: true
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
        isPhoto: true
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true
      }
    ]
  },
  {
    type: `gameThree`,
    mod: `game__content--triple`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: `https://k42.kn3.net/CF42609C8.jpg`,
        isPhoto: false
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true
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
        isPhoto: false
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
        isPhoto: true
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true
      }
    ]
  },
  {
    type: `gameThree`,
    mod: `game__content--triple`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        isPhoto: true
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true
      },
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        isPhoto: true
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
        isPhoto: true
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true
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
  if (time === -1) {
    return AnswerType.WRONG;
  }
  if (time !== -1 && time < 10) {
    return AnswerType.FAST;
  }
  if (time > 20 && time <= 30) {
    return AnswerType.SLOW;
  }
  if (time >= 10 && time <= 20) {
    return AnswerType.CORRECT;
  }
  return AnswerType.WRONG;
};

export const checkAnswer = (questionsList, number, answer) => {
  return (questionsList[number].isPhoto === answer);
};

export const checkAnswers = (state, answer) => {
  for (let i = 0; i < state.questions.length; i++) {
    if (answer.answer[i] !== state.questions[i].isPhoto) {
      return false;
    }
  }
  return true;
};


