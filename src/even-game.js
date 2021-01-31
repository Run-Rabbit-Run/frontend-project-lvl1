/* eslint-disable no-console, import/extensions, linebreak-style */

import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  const getRandomInt = (min, max) => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
  };

  const isEven = (number) => number % 2 === 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = getRandomInt(1, 99);

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if ((isEven(randomNumber) && answer.trim() === 'yes')
    || (!isEven(randomNumber) && answer.trim() !== 'yes')) {
      console.log('Correct!');
      correctAnswers += 1;
    } else if (!isEven(randomNumber) && answer.trim() === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
