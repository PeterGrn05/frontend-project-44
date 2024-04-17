const calcExpresion = (operator, num1, num2) => {
    switch (operator) {
        case 0:
            return num1 + num2;
        case 1:
            return num1 - num2;
        case 2:
            return num1 * num2;
        default:
            return 'Перебор!';
      }
}
export default calcExpresion;