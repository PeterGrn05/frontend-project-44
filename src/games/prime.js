import randNumber from '../utils/random.js';
import gameStart from '../../gameStart.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numb) => {
  if (numb <= 1) return false;
  for (let count = 2; count <= numb / 2; count += 1) {
    if (numb % count === 0) return false;
  }
  return true;
};

const prime = () => {
  const randomNumber = randNumber(1, 99);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const result = {
    answer: correctAnswer,
    question: `${randomNumber}`,
  };
  return result;
};

export default () => gameStart(prime, description);
