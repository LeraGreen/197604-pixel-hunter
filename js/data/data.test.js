import assert from 'assert';
import {resize, checkAnswer, checkAnswerType, tickTimer, clearTimer, updateLives, calcPoints} from './data.js';

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
  it(`Should return fast if questions correct and take less then 10 seconds`, () => {
    assert.equal(checkAnswerType(22), `fast`);
  });

  it(`Should return slow if questions correct and take less then 30 seconds`, () => {
    assert.equal(checkAnswerType(9), `slow`);
  });

  it(`should return wrong if user didn't answer or answer incorrect`, () => {
    assert.equal(checkAnswerType(-1), `wrong`);
  });

  it(`should fail if values more that setting`, () => {
    const setWrongTime = () => {
      checkAnswerType(32);
    };

    assert.throws(setWrongTime);
  });
});


describe(`timer`, () => {
  describe(`update timer`, () => {
    it(`Should return 0 in time property`, () => {
      const initialState = {
        time: 1
      };
      assert.equal(tickTimer(initialState).time, 0);
    });

    it(`Should return 8 in time property`, () => {
      const initialState = {
        time: 9
      };
      assert.equal(tickTimer(initialState).time, 8);
    });

    it(`should fail on negative values`, () => {
      const initialState = {
        time: -1
      };
      const setWrongTime = () => {
        tickTimer(initialState);
      };

      assert.throws(setWrongTime);
    });
  });

  describe(`clear timer`, () => {
    it(`Should return 30 in time property`, () => {
      const initialState = {
        time: 20
      };
      assert.equal(clearTimer(initialState).time, 30);
    });

    it(`Should return 30 in time property`, () => {
      const initialState = {
        time: 10
      };
      assert.equal(clearTimer(initialState).time, 30);
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

describe(`points`, () => {

  describe(`points from answers`, () => {
    it(`Should return 500 points`, () => {
      const initialState = {
        lives: 3,
        answers: [`wrong`, `fast`, `fast`, `slow`]
      };
      assert.equal(calcPoints(initialState), 500);
    });

    it(`Should return 200 points`, () => {
      const initialState = {
        lives: 0,
        answers: [`wrong`, `wrong`, `fast`, `slow`]
      };
      assert.equal(calcPoints(initialState), 200);
    });

    it(`Should return 0 points`, () => {
      const initialState = {
        lives: 0,
        answers: [`wrong`, `wrong`, `wrong`]
      };
      assert.equal(calcPoints(initialState), 0);
    });
  });
});


const createTestForFrame = (frame) => {
  const assertRatio = (given, expected) => {
    const actual = resize(frame, given);
    assert.deepEqual(actual, expected);
  };

  const createTest = (expected, multiplier) => {
    const given = {
      width: Math.floor(expected.width * multiplier),
      height: Math.floor(expected.height * multiplier)
    };
    it(`shrink ${multiplier}x: ${given.width}x${given.height} => ${expected.width}x${expected.height}`, () => {
      assertRatio(given, expected);
    });
  };

  const sequence = (expected) => {
    createTest(expected, 8);
    createTest(expected, 7);
    createTest(expected, 5);
    createTest(expected, 4);
    createTest(expected, 3);
    createTest(expected, 2);
    createTest(expected, 1);
  };

  describe(`Resize into frame: ${frame.width}x${frame.height}`, () => {

    describe(`when "width === height"`, () => {
      sequence({width: frame.width, height: frame.height});
    });

    describe(`when "width > height"`, () => {
      sequence({width: frame.width, height: Math.floor(frame.height / 2)});
    });

    describe(`when "width < height"`, () => {
      sequence({width: Math.floor(frame.width / 2), height: frame.height});
    });

  });
};

createTestForFrame({width: 256, height: 256});
createTestForFrame({width: 256, height: 128});

createTestForFrame({width: 468, height: 458});
createTestForFrame({width: 705, height: 455});
createTestForFrame({width: 304, height: 455});
