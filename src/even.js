import randNumber from '../random.js';
import gameStart from '../gameStart.js';

const isEven = (question) => question % 2 === 0;
const description = 'Answer "yes" if number is even, otherwise answer "no".';
const gameEven = () => {
  const ranNumber = randNumber(1, 100);
  const rightAnswer = isEven(ranNumber) ? 'yes' : 'no';
  const result = {
    answer: rightAnswer,
    question: `${ranNumber}`,
  };

  return result;
};

export default () => gameStart(gameEven, description);
