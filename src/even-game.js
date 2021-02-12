/* eslint-disable no-console, import/extensions, linebreak-style */

import {
  whatIsYourName, getRandomInt, description, result,
} from './index.js';

export default () => {
  const name = whatIsYourName();
  description('Answer "yes" if the number is even, otherwise answer "no".');

  const question = () => getRandomInt(1, 99);

  const correctAnswer = (condition) => ((condition % 2) === 0 ? 'yes' : 'no');

  result(name, question, correctAnswer);
};
