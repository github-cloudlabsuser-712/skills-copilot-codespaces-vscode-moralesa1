const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
      let result;
      switch(operation) {
        case '+':
          result = parseFloat(firstNumber) + parseFloat(secondNumber);
          break;
        case '-':
          result = parseFloat(firstNumber) - parseFloat(secondNumber);
          break;
        case '*':
          result = parseFloat(firstNumber) * parseFloat(secondNumber);
          break;
        case '/':
          if (secondNumber === '0') {
            console.log('Cannot divide by zero');
            rl.close();
            return;
          }
          result = parseFloat(firstNumber) / parseFloat(secondNumber);
          break;
        default:
          console.log('Invalid operation');
          rl.close();
          return;
      }
      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});

const calculate = require('./calculate');

test('adds 1 + 2 to equal 3', () => {
  expect(calculate('1', '2', '+')).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculate('5', '3', '-')).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(calculate('2', '3', '*')).toBe(6);
});

test('divides 10 / 2 to equal 5', () => {
  expect(calculate('10', '2', '/')).toBe(5);
});

test('throws error when dividing by zero', () => {
  expect(() => calculate('10', '0', '/')).toThrow('Cannot divide by zero');
});

test('throws error when invalid operation is provided', () => {
  expect(() => calculate('10', '2', 'invalid')).toThrow('Invalid operation');
});