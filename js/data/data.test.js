import assert from 'assert';
import {checkAnswer, checkAnswerType, calcLivesPoints, tickTimer, clearTimer, updateLives} from './data.js';

describe(`right answers`, () => {

  describe(`one answer from three`, () => {
    it(`Should return true if received answer equal correct answer`, () => {
      const roundState = {
        type: `gameThree`,
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
      assert.equal(checkAnswer(roundState, 1), true);
    });

    it(`Should return false if received answer not equal correct answer`, () => {
      const roundState = {
        type: `gameThree`,
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
      assert.equal(checkAnswer(roundState, 2), false);
    });
  });

  describe(`one picture on screen`, () => {
    it(`Should return true if received answer equal correct answer`, () => {
      const roundState = {
        type: `gameTwo`,
        answers: [
          {
            type: `paint`
          }
        ]
      };
      assert.equal(checkAnswer(roundState, `paint`), true);
    });

    it(`Should return false if received answer not equal correct answer`, () => {
      const roundState = {
        type: `gameTwo`,
        answers: [
          {
            type: `paint`
          }
        ]
      };
      assert.equal(checkAnswer(roundState, `photo`), false);
    });
  });

  describe(`two pictures on screen`, () => {
    it(`Should return true if received answers equal correct answers`, () => {
      const roundState = {
        type: `gameOne`,
        answers: [
          {
            type: `photo`
          },
          {
            type: `paint`
          }
        ]
      };
      assert.equal(checkAnswer(roundState, [`photo`, `paint`]), true);
    });

    it(`Should return false if two received answers not equal correct answers`, () => {
      const roundState = {
        type: `gameOne`,
        answers: [
          {
            type: `photo`
          },
          {
            type: `paint`
          }
        ]
      };
      assert.equal(checkAnswer(roundState, [`paint`, `photo`]), false);
    });

    it(`Should return false if one received answer not equal correct answers`, () => {
      const roundState = {
        type: `gameOne`,
        answers: [
          {
            type: `photo`
          },
          {
            type: `paint`
          }
        ]
      };
      assert.equal(checkAnswer(roundState, [`paint`, `paint`]), false);
    });
  });
});

describe(`type of questions`, () => {
  it(`Should return slow if questions correct and take less then 30 seconds`, () => {
    assert.equal(checkAnswerType(22), `slow`);
  });

  it(`Should return fast if questions correct and take less then 10 seconds`, () => {
    assert.equal(checkAnswerType(9), `fast`);
  });

  it(`Should return wrong if questions not correct or user didn't answer`, () => {
    assert.equal(checkAnswerType(-1), `wrong`);
  });

  it(`should fail on negative values`, () => {
    const setWrongTime = () => {
      checkAnswerType(32);
    };

    assert.throws(setWrongTime);
  });
});

describe(`points from lives`, () => {
  it(`Should return 50 if one life is left`, () => {
    assert.equal(calcLivesPoints(1), 50);
  });

  it(`Should return 100 if two lives are left`, () => {
    assert.equal(calcLivesPoints(2), 100);
  });

  it(`Should return 150 if three lives are left`, () => {
    assert.equal(calcLivesPoints(3), 150);
  });

  it(`Should return 0 if 0 life is left`, () => {
    assert.equal(calcLivesPoints(0), 0);
  });
});

describe(`timer`, () => {
  describe(`update timer`, () => {
    it(`Should return 2 in time property`, () => {
      const initialState = {
        time: 1
      };
      assert.equal(tickTimer(initialState).time, 2);
    });

    it(`Should return 10 in time property`, () => {
      const initialState = {
        time: 9
      };
      assert.equal(tickTimer(initialState).time, 10);
    });

    it(`should fail on negative values`, () => {
      const initialState = {
        time: 32
      };
      const setWrongTime = () => {
        tickTimer(initialState);
      };

      assert.throws(setWrongTime);
    });
  });

  describe(`clear timer`, () => {
    it(`Should return 0 in time property`, () => {
      const initialState = {
        time: 20
      };
      assert.equal(clearTimer(initialState).time, 0);
    });

    it(`Should return 0 in time property`, () => {
      const initialState = {
        time: 10
      };
      assert.equal(clearTimer(initialState).time, 0);
    });
  });
});

describe(`lives`, () => {
  describe(`update lives`, () => {
    it(`Should return 2 in lives property`, () => {
      const initialState = {
        lives: 3
      };
      assert.equal(updateLives(initialState).lives, 2);
    });

    it(`Should return 0 in lives property`, () => {
      const initialState = {
        lives: 0
      };
      assert.equal(updateLives(initialState).lives, 0);
    });

    it(`should fail on negative values`, () => {
      const initialState = {
        lives: -1
      };
      const setNegativeLives = () => {
        updateLives(initialState);
      };

      assert.throws(setNegativeLives);
    });
  });
});
