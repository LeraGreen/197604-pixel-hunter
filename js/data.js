const initialState = {
  lives: 3,
  time: 0,
  nameUser: ``,
  currentQuestion: 0,
  answers: [],
  questions: [
    {
      type: `oneQuestion`,
      answers: [
        {
          img: `https://k42.kn3.net/CF42609C8.jpg`,
          isPaint: true
        }
      ]
    },
    {
      type: `twoQuestion`,
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
      type: `threeQuestion`,
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
  ]
};

const settings = {
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


// module.exports = {
//   paintings: [
//     // People
//     'https://k42.kn3.net/CF42609C8.jpg',
//
//     // Animals
//     'https://k42.kn3.net/D2F0370D6.jpg',
//
//     // Nature
//     'https://k32.kn3.net/5C7060EC5.jpg'
//   ],
//   photos: [
//     // People
//     'http://i.imgur.com/1KegWPz.jpg',
//
//     // Animals
//     'https://i.imgur.com/DiHM5Zb.jpg',
//
//     // Nature
//     'http://i.imgur.com/DKR1HtB.jpg'
//   ]
// };


