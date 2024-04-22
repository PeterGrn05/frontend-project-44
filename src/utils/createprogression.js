const progressLength = 10;
const createProgression = (start, step, hideRightAnswer) => {
  let progression = '';

  for (let count = 0; count < progressLength; count += 1) {
    const checkPoint = start + step * count;
    if (count === hideRightAnswer) {
      progression += '.. ';
    } else {
      progression += `${checkPoint} `;
    }
  }
  return progression;
};

export default createProgression;
