import randNumber from '../random.js';
import gameStart from '../gameStart.js';

const description = "What is the result of the expression?"
const operator = ['+', '-', '*'];

const gameCalc = () => {
    let correctAnswer;
    const randomNumber = randNumber(1, 30);
    const randomNumber2 = randNumber(1, 30);
    const randomOperator= randNumber (0, 2);
    switch (randomOperator) {
    case 0: correctAnswer = randomNumber + randomNumber2;
      break;
    case 1: correctAnswer = randomNumber - randomNumber2;
      break;
    case 2: correctAnswer = randomNumber * randomNumber2;
      break;
    default: correctAnswer = 'Перебор!';
  }
  const result = {
    answer: String(correctAnswer),
    question: `${randomNumber} ${operator[randomOperator]} ${randomNumber2}`,
  };

  return result;
};

export default () => gameStart(gameCalc, description);
