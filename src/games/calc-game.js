/* eslint-disable no-console, import/extensions, linebreak-style */

import {
  whatIsYourName, getRandomInt, description, result,
} from '../index.js';

export default () => {
  const name = whatIsYourName();
  description('What is the result of the expression?');

  const question = () => {
    const operations = ['+', '-', '*'];
    const operationId = getRandomInt(0, (operations.length - 1));
    const randomOperation = operations[operationId];
    const number1 = getRandomInt(0, 99);
    const number2 = getRandomInt(0, 99);
    return `${number1} ${randomOperation} ${number2}`;
  };

  const correctAnswer = (condition) => {
    const array = condition.split(' ');
    const number1 = parseInt(array[0], 10);
    const number2 = parseInt(array[2], 10);
    let res;
    switch (array[1]) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
        // no default
    }
    return res;
  };

  result(name, question, correctAnswer);
};
