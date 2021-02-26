/* eslint-disable no-console, import/extensions, linebreak-style */

import {
  whatIsYourName, getRandomInt, description, result,
} from './index.js';

export default () => {
  const name = whatIsYourName();
  description('What number is missing in the progression?');

  const question = () => {
    const startNumber = getRandomInt(1, 99);
    const increment = getRandomInt(1, 99);
    const arrayLength = getRandomInt(5, 10);
    const missingIndex = getRandomInt(1, arrayLength - 2);
    const progression = [];
    for (let i = 0; i < arrayLength; i += 1) {
      if (i === 0) {
        progression[i] = startNumber;
      } else {
        progression[i] = progression[i - 1] + increment;
      }
    }
    progression[missingIndex] = '..';
    return `${progression.join(' ')}`;
  };

  const correctAnswer = (condition) => {
    const progression = condition.split(' ');
    let increment = null;
    for (let i = 0; i < progression.length; i += 1) {
      increment = progression[i + 1] - progression[i];
      if (!Number.isNaN(increment)) {
        break;
      }
    }
    const resIndex = progression.indexOf('..');
    const res = progression[resIndex + 1] - increment;
    return res;
  };

  result(name, question, correctAnswer);
};
