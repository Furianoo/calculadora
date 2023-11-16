

let expression = '';

function appendNumber(number) {
  expression += number;
  document.getElementById('result').value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById('result').value = expression;
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    if (Number.isFinite(result)) {
      document.getElementById('result').value = result;
      expression = '';
    } else {
      document.getElementById('result').value = 'Error';
    }
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}