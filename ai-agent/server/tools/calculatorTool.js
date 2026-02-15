const calculate = (expression) => {
  try {
    // Basic calculator using eval (sanitized for safety in procuction, but okay for demo)
    // Better to use mathjs library, but let's keep it simple and safe-ish.
    // Allow only numbers and basic operators.
    if (/[^0-9+\-*/(). ]/.test(expression)) {
      return 'Invalid characters in expression.';
    }
    // eslint-disable-next-line no-eval
    const result = eval(expression); 
    return `The result of ${expression} is ${result}.`;
  } catch (error) {
    return 'Could not calculate expression.';
  }
};

module.exports = {
  name: 'calculate',
  description: 'Evaluate a mathematical expression.',
  parameters: {
    type: 'object',
    properties: {
      expression: {
        type: 'string',
        description: 'The mathematical expression to evaluate, e.g. "2 + 2 * 5"'
      }
    },
    required: ['expression']
  },
  execute: calculate
};
