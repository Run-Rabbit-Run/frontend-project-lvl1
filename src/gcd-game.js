/* eslint-disable no-console, import/extensions, linebreak-style */

import {
  whatIsYourName, getRandomInt, description, result,
} from './index.js';

export default () => {
  const name = whatIsYourName();
  description('Find the greatest common divisor of given numbers.');

  const question = () => {
    const number1 = getRandomInt(1, 99);
    const number2 = getRandomInt(1, 99);
    return `${number1} ${number2}`;
  };

  const correctAnswer = (condition) => {
    const [number1, number2] = condition.split(' ');
    let res = 1;
    const lowerNum = number1 < number2 ? number1 : number2;
    const greaterNum = number1 > number2 ? number1 : number2;

    for (let i = lowerNum; i > 1; i -= 1) {
      if (greaterNum % i === 0 && lowerNum % i === 0) {
        res = i;
        break;
      }
    }

    return res;
  };

  result(name, question, correctAnswer);
};
