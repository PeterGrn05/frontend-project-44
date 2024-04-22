import randNumber from '../utils/random.js';
import gameStart from '../../gameStart.js';
import calcExpresion from '../utils/calcexpression.js';

const description = 'What is the result of the expression?';
const operator = ['+', '-', '*'];

const gameCalc = () => {
  const randomNumber = randNumber(1, 30);
  const randomNumber2 = randNumber(1, 30);
  const randomOperator = operator[randNumber(0, 2)];
  const correctAnswer = calcExpresion(randomOperator, randomNumber, randomNumber2);
  const result = {
    answer: String(correctAnswer),
    question: `${randomNumber} ${randomOperator} ${randomNumber2}`,
  };

  return result;
};

export default () => gameStart(gameCalc, description);
