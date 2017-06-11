export const initialState = {
  lives: 2,
  time: 0,
  nameUser: ``,
  currentQuestion: 0,
  answers: []
};

export const questions = [
  {
    type: `gameTwo`,
    mod: `game__content--wide`,
    question: `Угадай, фото или рисунок`,
    answers: [
      {
        img: `https://k42.kn3.net/CF42609C8.jpg`,
        isPhoto: false,
        isPicture: true
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
        isPhoto: true,
        isPicture: false
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true,
        isPicture: false
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
        isPhoto: true,
        isPicture: false
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true,
        isPicture: false
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        isPhoto: true,
        isPicture: false
      }
    ]
  }
];

export const settings = {
  maxLives: 3,
  screens: 10,
  answers: [
    {
      title: `wrong`,
      isCorrect: false,
      points: 0
    },
    {
      title: `slow`,
      isCorrect: true,
      points: 50,
      time: 30,
    },
    {
      title: `correct`,
      isCorrect: true,
      points: 50,
      time: 20
    },
    {
      title: `fast`,
      isCorrect: true,
      points: 50,
      time: 10
    }
  ],
  timeToAnswer: 30
};


