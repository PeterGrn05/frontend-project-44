import randNumber from '../random.js';
import gameStart from '../gameStart.js';

const isEven = (question) => question % 2 === 0;
const description = 'Answer "yes" if number is even, otherwise answer "no".';
const gameEven = () => {
  const randomNumber = randNumber(1, 99);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const result = {
    answer: correctAnswer,
    question: `${randomNumber}`,
  };

  return result;
};

export default () => gameStart(gameEven, description);
