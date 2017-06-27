import assert from 'assert';
import {checkAnswer, checkAnswers, checkAnswerType, calcLivesPoints, checkAnswersFromThree} from './data.js';

describe(`right answers`, () => {

  describe(`one answer from three`, () => {
    it(`Should return true if received answer equal correct answer`, () => {
      const roundState = {
        screen: `one is right`,
        searchType: `paint`,
        answers: [
          {
            type: `photo`
          },
          {
            type: `paint`
          },
          {
            type: `photo`
          },
        ]
      };
      const userAnswer = {
        num: 1
      };
      assert.equal(checkAnswersFromThree(roundState.answers, roundState.searchType, userAnswer.num), true);
    });

    it(`Should return false if received answer not equal correct answer`, () => {
      const roundState = {
        screen: `one is right`,
        searchType: `paint`,
        answers: [
          {
            type: `photo`
          },
          {
            type: `paint`
          },
          {
            type: `photo`
          },
        ]
      };
      const userAnswer = {
        num: 2,
      };
      assert.equal(checkAnswersFromThree(roundState.answers, roundState.searchType, userAnswer.num), false);
    });
  });

  describe(`one picture on screen`, () => {
    it(`Should return true if received answer equal correct answer`, () => {
      const roundState = {
        screen: `one picture`,
        answers: [
          {
            type: `paint`
          }
        ]
      };
      const userAnswer = {
        answer: `paint`
      };
      assert.equal(checkAnswer(roundState.answers, userAnswer.answer), true);
    });

    it(`Should return false if received answer not equal correct answer`, () => {
      const roundState = {
        screen: `one picture`,
        answers: [
          {
            type: `paint`
          }
        ]
      };
      const userAnswer = {
        answer: `photo`
      };
      assert.equal(checkAnswer(roundState.answers, userAnswer.answer), false);
    });
  });

  describe(`two pictures on screen`, () => {
    it(`Should return true if received answers equal correct answers`, () => {
      const roundState = {
        screen: `two questions`,
        answers: [
          {
            type: `photo`
          },
          {
            type: `paint`
          }
        ]
      };
      const userAnswer = {
        answer: [`photo`, `paint`]
      };
      assert.equal(checkAnswers(roundState.answers, userAnswer.answer), true);
    });

    it(`Should return false if two received answers not equal correct answers`, () => {
      const roundState = {
        screen: `two questions`,
        answers: [
          {
            type: `photo`
          },
          {
            type: `paint`
          }
        ]
      };
      const userAnswer = {
        answer: [`paint`, `photo`]
      };
      assert.equal(checkAnswers(roundState.answers, userAnswer.answer), false);
    });

    it(`Should return false if one received answer not equal correct answers`, () => {
      const roundState = {
        screen: `two questions`,
        answers: [
          {
            type: `photo`
          },
          {
            type: `paint`
          }
        ]
      };
      const userAnswer = {
        answer: [`paint`, `paint`]
      };
      assert.equal(checkAnswers(roundState.answers, userAnswer.answer), false);
    });
  });
});

describe(`type of questions`, () => {
  it(`Should return slow if questions correct and take less then 30 seconds`, () => {
    const userAnswer = {
      time: 22
    };
    assert.equal(checkAnswerType(userAnswer.time), `slow`);
  });

  it(`Should return fast if questions correct and take less then 10 seconds`, () => {
    const userAnswer = {
      time: 9
    };
    assert.equal(checkAnswerType(userAnswer.time), `fast`);
  });

  it(`Should return wrong if questions not correct or user didn't answer`, () => {
    const userAnswer = {
      time: -1
    };
    assert.equal(checkAnswerType(userAnswer.time), `wrong`);
  });
});

describe(`points from lives`, () => {
  it(`Should return 50 if one life is left`, () => {
    const initialState = {
      lives: 1
    };
    assert.equal(calcLivesPoints(initialState), 50);
  });

  it(`Should return 100 if two lives are left`, () => {
    const initialState = {
      lives: 2
    };
    assert.equal(calcLivesPoints(initialState), 100);
  });

  it(`Should return 150 if three lives are left`, () => {
    const initialState = {
      lives: 3
    };
    assert.equal(calcLivesPoints(initialState), 150);
  });

  it(`Should return 0 if 0 life is left`, () => {
    const initialState = {
      lives: 0
    };
    assert.equal(calcLivesPoints(initialState), 0);
  });
});
