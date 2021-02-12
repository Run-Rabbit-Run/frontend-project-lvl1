/* eslint-disable no-console, import/extensions, linebreak-style */

import readlineSync from 'readline-sync';

const whatIsYourName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  return userName;
};

const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const description = (text) => {
  console.log(text);
};

const result = (name, question, correctAns) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomQuestion = question();
    const realAnswer = correctAns(randomQuestion);
    const isCorrect = (userAnswer, wrightAnswer) => (wrightAnswer === userAnswer);

    console.log(`Question: ${randomQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (isCorrect(userAnswer, realAnswer.toString())) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${realAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export {
  whatIsYourName, getRandomInt, description, result,
};
