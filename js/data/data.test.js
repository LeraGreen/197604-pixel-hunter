import assert from 'assert';

describe(`right answers`, () => {

  describe(`one answer from three`, () => {
    it(`Should return true if received answer equal correct answer`, () => {
      const roundState = {
        startDate: new Date(2017, 4, 6, 6, 6, 0),
        type: `one is right`,
        questions: [
          {
            src: ``,
            isPhoto: true,
            isPicture: false
          },
          {
            src: ``,
            isPhoto: false,
            isPicture: true
          },
          {
            src: ``,
            isPhoto: true,
            isPicture: false
          },
        ]
      };
      const userAnswer = {
        date: new Date(2017, 4, 6, 6, 6, 22),
        num: 1,
        answer: `isPicture`
      };
      assert(checkAnswer(roundState, userAnswer));
    });

    it(`Should return false if received answer not equal correct answer`, () => {
      const roundState = {
        startDate: new Date(2017, 4, 6, 6, 6, 0),
        type: `one is right`,
        questions: [
          {
            src: ``,
            isPhoto: true,
            isPicture: false
          },
          {
            src: ``,
            isPhoto: false,
            isPicture: true
          },
          {
            src: ``,
            isPhoto: true,
            isPicture: false
          },
        ]
      };
      const userAnswer = {
        date: new Date(2017, 4, 6, 6, 6, 22),
        num: 2,
        answer: `isPicture`
      };
      assert(!checkAnswer(roundState, userAnswer));
    });
  });

  describe(`one picture on screen`, () => {
    it(`Should return true if received answer equal correct answer`, () => {
      const roundState = {
        startDate: new Date(2017, 4, 6, 6, 6, 0),
        type: `one picture`,
        questions: [
          {
            src: ``,
            isPhoto: false,
            isPicture: true
          }
        ]
      };
      const userAnswer = {
        date: new Date(2017, 4, 6, 6, 6, 22),
        num: 0,
        answer: `isPicture`
      };
      assert(checkAnswer(roundState, userAnswer));
    });

    it(`Should return false if received answer not equal correct answer`, () => {
      const roundState = {
        startDate: new Date(2017, 4, 6, 6, 6, 0),
        type: `one picture`,
        questions: [
          {
            src: ``,
            isPhoto: false,
            isPicture: true
          }
        ]
      };
      const userAnswer = {
        date: new Date(2017, 4, 6, 6, 6, 22),
        num: 0,
        answer: `isPhoto`
      };
      assert(!checkAnswer(roundState, userAnswer));
    });
  });

  describe(`two pictures on screen`, () => {
    it(`Should return true if received answers equal correct answers`, () => {
      const roundState = {
        startDate: new Date(2017, 4, 6, 6, 6, 0),
        type: `two questions`,
        questions: [
          {
            src: ``,
            isPhoto: true,
            isPicture: false
          },
          {
            src: ``,
            isPhoto: false,
            isPicture: true
          }
        ]
      };
      const userAnswer = {
        date: new Date(2017, 4, 6, 6, 6, 22),
        num: ``,
        answer: [`isPhoto`, `isPicture`]
      };
      assert(checkAnswers(roundState, userAnswer));
    });

    it(`Should return false if two received answers not equal correct answers`, () => {
      const roundState = {
        startDate: new Date(2017, 4, 6, 6, 6, 0),
        type: `two questions`,
        questions: [
          {
            src: ``,
            isPhoto: true,
            isPicture: false
          },
          {
            src: ``,
            isPhoto: false,
            isPicture: true
          }
        ]
      };
      const userAnswer = {
        date: new Date(2017, 4, 6, 6, 6, 22),
        num: ``,
        answer: [`isPicture`, `isPhoto`]
      };
      assert(!checkAnswers(roundState, userAnswer));
    });

    it(`Should return false if one received answer not equal correct answers`, () => {
      const roundState = {
        startDate: new Date(2017, 4, 6, 6, 6, 0),
        type: `two questions`,
        questions: [
          {
            src: ``,
            isPhoto: true,
            isPicture: false
          },
          {
            src: ``,
            isPhoto: false,
            isPicture: true
          }
        ]
      };
      const userAnswer = {
        date: new Date(2017, 4, 6, 6, 6, 22),
        num: ``,
        answer: [`isPicture`, `isPicture`]
      };
      assert(!checkAnswers(roundState, userAnswer));
    });
  });
});

describe(`type of questions`, () => {
  it(`Should return slow if questions correct and take less then 30 seconds`, () => {
    const roundState = {
      startDate: new Date(2017, 4, 6, 6, 6, 0),
      type: `one is right`,
      questions: [],
      points: 0
    };
    const userAnswer = {
      date: new Date(2017, 4, 6, 6, 6, 22),
      num: 1,
      answer: true
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
    assert.equal(checkAnswerType(roundState, settings, userAnswer).questions[0], `slow`);
  });

  it(`Should return fast if questions correct and take less then 10 seconds`, () => {
    const roundState = {
      startDate: new Date(2017, 4, 6, 6, 6, 0),
      type: `one is right`,
      questions: [],
      points: 0
    };
    const userAnswer = {
      date: new Date(2017, 4, 6, 6, 6, 9),
      num: 1,
      answer: true
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
    assert.equal(checkAnswerType(roundState, settings, userAnswer).questions[0], `fast`);
  });

  it(`Should return wrong if questions not correct`, () => {
    const roundState = {
      startDate: new Date(2017, 4, 6, 6, 6, 0),
      type: `one is right`,
      questions: [],
      points: 0
    };
    const userAnswer = {
      date: new Date(2017, 4, 6, 6, 6, 12),
      num: 1,
      answer: false
    };
    const settings = {
      maxLives: 3,
      screens: 10,
      answers: [
        {
          title: `wrong`,
          isCorrect: false,
          time: 30,
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
    assert.equal(checkAnswerType(roundState, settings, userAnswer).questions[0], `wrong`);
  });

  it(`Should return wrong if user didn't answer`, () => {
    const roundState = {
      startDate: new Date(2017, 4, 6, 6, 6, 0),
      type: `one is right`,
      questions: [],
      points: 0
    };
    const userAnswer = {
      date: new Date(2017, 4, 6, 6, 6, 30),
      num: 1,
      answer: null
    };
    const settings = {
      maxLives: 3,
      screens: 10,
      answers: [
        {
          title: `wrong`,
          isCorrect: false,
          time: 30,
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
    assert.equal(checkAnswerType(roundState, settings, userAnswer).questions[0], `wrong`);
  });
});

// функции для тестов

const checkAnswerType = (roundState, settings, userAnswer) => {
  const answerTime = userAnswer.date.getSeconds() - roundState.startDate.getSeconds();
  let answerType = ``;
  settings.answers.forEach((answer) => {
    if (answer.isCorrect === userAnswer.answer && answerTime <= answer.time) {
      answerType = answer.title;
    }
    if (answerTime >= settings.timeToAnswer && userAnswer.answer === null) {
      answerType = `wrong`;
    }
  });
  roundState.questions.push(answerType);
  return roundState;
};

const checkAnswer = (state, answer) => {
  return state.questions[answer.num][answer.answer];
};

const checkAnswers = (state, answer) => {
  let isFound = true;
  state.questions.forEach((question, index) => {
    if (answer.answer[index] === `isPhoto`) {
      isFound = isFound && question.isPhoto;
    }
    if (answer.answer[index] === `isPicture`) {
      isFound = isFound && question.isPicture;
    }
  });
  return isFound;
};
