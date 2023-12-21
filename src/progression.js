import randNumber from '../random.js';
import gameStart from '../gameStart.js';

const description = 'What number is missing in the progression?';
const progressLength = 10;

const gameProgress = () => {
  const step = randNumber(1, 10);
  const start = randNumber(1, 99);
  const hideRightAnswer = randNumber(0, progressLength - 1);
  const correctAnswer = start + hideRightAnswer * step;

  let progression = '';

  for (let count = 0; count < progressLength; count += 1) {
    const checkPoint = start + step * count;
    if (count === hideRightAnswer) {
      progression += '.. ';
    } else {
      progression += `${checkPoint} `;
    }
  }

  const result = {
    answer: String(correctAnswer),
    question: `${progression}`,
  };
  return result;
};

export default () => gameStart(gameProgress, description);
