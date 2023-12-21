import readlineSync from 'readline-sync';

const maxSteps = 3;

const gameStart = (theCorrectAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let counterStep = 0; counterStep < maxSteps; counterStep += 1) {
    const correctAnswer = theCorrectAnswer();
    console.log(`Question: ${correctAnswer.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer.answer}.'
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameStart;
