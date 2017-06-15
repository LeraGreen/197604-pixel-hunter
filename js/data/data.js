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
  }
];


export const calcLivesPoints = (state) => {
  let points = 0;
  if (state.lives === 0) {
    return points;
  }
  for (let i = state.lives; i > 0; i--) {
    points += 50;
  }
  return points;
};

export const calcAnswerPoints = (roundState) => {
  const points = {
    'wrong': 0,
    'slow': 50,
    'correct': 100,
    'fast': 150
  };
  return points[roundState.questions[0]];
};

export const checkAnswerType = (userAnswer) => {
  if (userAnswer.date === -1) {
    return `wrong`;
  }
  if (userAnswer.date !== -1 && userAnswer.date < 10) {
    return `fast`;
  }
  if (userAnswer.date > 20 && userAnswer.date <= 30) {
    return `slow`;
  }
  if (userAnswer.date >= 10 && userAnswer.date <= 20) {
    return `correct`;
  }
  return `wrong`;
};

export const checkAnswer = (state, answer) => {
  if (state.questions[answer.num].isPhoto !== answer.answer) {
    return false;
  }
  return true;
};

export const checkAnswers = (state, answer) => {
  let isFound = true;
  for (let i = 0; i < state.questions.length; i++) {
    if (answer.answer[i] === state.questions[i].isPhoto) {
      isFound = true;
    } else {
      return (isFound = false);
    }
  }
  return isFound;
};


