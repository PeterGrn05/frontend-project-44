import randNumber from '../random.js';
import gameStart from '../gameStart.js';

const description = 'Find the greatest common divisor of given numbers.';
const locateGCD = (num1, num2) => {
    let numOne = num1;
    let numTwo = num2;
    if (numOne === numTwo) {
      return numOne;
    }
    if (numOne > numTwo) {
      numOne = num1 - num2;
    } else {
      numTwo = num2 - num1;
    }
    return locateGCD(numOne, numTwo);
  };
  
  const gameGCD = () => {
    const randomNumber = randNumber(1, 99);
    const randomNumber2 = randNumber(1, 99);
    const result = {
      answer: String(locateGCD(randomNumber, randomNumber2)),
      question: `${randomNumber} ${randomNumber2}`,
    };
    return result;
  };
  
  export default () => gameStart(gameGCD, description);