import randNumber from '../utils/random.js';
import gameStart from '../../gameStart.js';

const isEven = (question) => question % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const ranNumber = randNumber(1, 100);
const gameEven = () => {
  const rightAnswer = isEven(ranNumber) ? 'yes' : 'no';
  const resultsoftask = {
    answer: rightAnswer,
    question: `${ranNumber}`,
  };

  return resultsoftask;
};

export default () => gameStart(gameEven, description);
