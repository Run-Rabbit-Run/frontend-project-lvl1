/* eslint-disable no-console, import/extensions, linebreak-style */

import {
  whatIsYourName, getRandomInt, description, result,
} from '../index.js';

export default () => {
  const name = whatIsYourName();
  description('Answer "yes" if given number is prime. Otherwise answer "no".');

  const question = () => getRandomInt(1, 99);

  const correctAnswer = (condition) => {
    if (condition === 2 || condition === 3) {
      return 'yes';
    }
    if (condition === 1) {
      return 'no';
    }
    for (let i = 2; i < (condition - 1); i += 1) {
      if (condition % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  result(name, question, correctAnswer);
};
