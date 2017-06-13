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
      points: []
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
      points: []
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
      points: []
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
      points: []
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

describe(`points from questions`, () => {
  it(`Should return 50 if question is slow`, () => {
    const roundState = {
      startDate: new Date(2017, 4, 6, 6, 6, 0),
      type: `one is right`,
      questions: [],
      points: []
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
    assert.equal(checkAnswerType(roundState, settings, userAnswer).points[0], 50);
  });

  it(`Should return 100 if question is correct`, () => {
    const roundState = {
      startDate: new Date(2017, 4, 6, 6, 6, 0),
      type: `one is right`,
      questions: [],
      points: []
    };
    const userAnswer = {
      date: new Date(2017, 4, 6, 6, 6, 15),
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
    assert.equal(checkAnswerType(roundState, settings, userAnswer).points[0], 100);
  });

  it(`Should return 150 if question is fast`, () => {
    const roundState = {
      startDate: new Date(2017, 4, 6, 6, 6, 0),
      type: `one is right`,
      questions: [],
      points: []
    };
    const userAnswer = {
      date: new Date(2017, 4, 6, 6, 6, 2),
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
          time: 30,
          points: []
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
    assert.equal(checkAnswerType(roundState, settings, userAnswer).points[0], 150);
  });

  it(`Should return 0 if question is wrong`, () => {
    const roundState = {
      startDate: new Date(2017, 4, 6, 6, 6, 0),
      type: `one is right`,
      questions: [],
      points: []
    };
    const userAnswer = {
      date: new Date(2017, 4, 6, 6, 6, 2),
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
          points: []
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
    assert.equal(checkAnswerType(roundState, settings, userAnswer).points[0], 0);
  });

  it(`Should return 0 if user didn't answer`, () => {
    const roundState = {
      startDate: new Date(2017, 4, 6, 6, 6, 0),
      type: `one is right`,
      questions: [],
      points: []
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
    assert.equal(checkAnswerType(roundState, settings, userAnswer).points[0], 0);
  });
});

describe(`points from lives`, () => {
  it(`Should return 50 if one life is left`, () => {
    const initialState = {
      lives: 1,
      points: [150, 50, 0, 150]
    };
    assert.equal(calcLivesPoints(initialState).points[4], 50);
  });

  it(`Should return 100 if two lives are left`, () => {
    const initialState = {
      lives: 2,
      points: [150, 50, 0, 150]
    };
    assert.equal(calcLivesPoints(initialState).points[4], 100);
  });

  it(`Should return 150 if three lives are left`, () => {
    const initialState = {
      lives: 3,
      points: [150, 50, 0, 150]
    };
    assert.equal(calcLivesPoints(initialState).points[4], 150);
  });

  it(`Should return 0 if 0 life is left`, () => {
    const initialState = {
      lives: 0,
      points: [150, 50, 0, 150]
    };
    assert.equal(calcLivesPoints(initialState).points[4], 0);
  });
});


describe(`change screen`, () => {
  it(`Should return greeting if current screen is intro`, () => {
    const initialState = {
      lives: 2,
      time: 0,
      nameUser: ``,
      currentQuestion: 0,
      currentScreen: `intro`,
      answers: []
    };
    const screensSettings = {
      'main': `intro`,
      'intro': `greeting`,
      'greeting': `rules`,
      'rules': `gameOne`,
      'gameOne': `gameTwo`,
      'gameTwo': `gameThree`,
      'gameThree': `stats`
    };
    assert.equal(changeScreen(initialState, screensSettings).currentScreen, `greeting`);
  });

  it(`Should return stats if user has no lives`, () => {
    const initialState = {
      lives: 0,
      time: 0,
      nameUser: ``,
      currentQuestion: 0,
      currentScreen: `intro`,
      answers: []
    };
    const screensSettings = {
      'main': `intro`,
      'intro': `greeting`,
      'greeting': `rules`,
      'rules': `gameOne`,
      'gameOne': `gameTwo`,
      'gameTwo': `gameThree`,
      'gameThree': `stats`
    };
    assert.equal(changeScreen(initialState, screensSettings).currentScreen, `stats`);
  });

  it(`Should return gameOne if current screen is rules`, () => {
    const initialState = {
      lives: 2,
      time: 0,
      nameUser: ``,
      currentQuestion: 0,
      currentScreen: `rules`,
      answers: []
    };
    const screensSettings = {
      'main': `intro`,
      'intro': `greeting`,
      'greeting': `rules`,
      'rules': `gameOne`,
      'gameOne': `gameTwo`,
      'gameTwo': `gameThree`,
      'gameThree': `stats`
    };
    assert.equal(changeScreen(initialState, screensSettings).currentScreen, `gameOne`);
  });
});


// функции для тестов
const changeScreen = (initialState, screensSettings) => {
  initialState.currentScreen = screensSettings[initialState.currentScreen];
  if (initialState.lives === 0) {
    initialState.currentScreen = `stats`;
  }
  return initialState;
};


const calcLivesPoints = (initialState) => {
  let points = 0;
  for (let i = initialState.lives; i > 0; i--) {
    points += 50;
  }
  initialState.points.push(points);
  return initialState;
};

const checkAnswerType = (roundState, settings, userAnswer) => {
  const answerTime = userAnswer.date.getSeconds() - roundState.startDate.getSeconds();
  let answerType = ``;
  let points = 0;
  settings.answers.forEach((answer) => {
    if (answer.isCorrect === userAnswer.answer && answerTime <= answer.time) {
      answerType = answer.title;
      points += answer.points;
    }
    if (answerTime >= settings.timeToAnswer && userAnswer.answer === null) {
      answerType = `wrong`;
      points = 0;
    }
  });
  roundState.questions.push(answerType);
  roundState.points.push(points);
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
