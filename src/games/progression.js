import randNumber from '../utils/random.js';
import gameStart from '../../gameStart.js';
import createProgression from '../utils/createprogression.js';

const description = 'What number is missing in the progression?';
const progressLength = 10;

const gameProgress = () => {
  const step = randNumber(1, 10);
  const start = randNumber(1, 99);
  const hideRightAnswer = randNumber(0, progressLength - 1);
  const correctAnswer = start + hideRightAnswer * step;

  const progress = createProgression(start, step, hideRightAnswer)
  const result = {
    answer: String(correctAnswer),
    question: `${progress}`,
  };
  return result;
};

export default () => gameStart(gameProgress, description);
