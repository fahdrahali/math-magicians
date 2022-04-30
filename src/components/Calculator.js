import React, { useState } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';
import Display from './Display';
import Keyboard from './Keyboard';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const getValue = (e) => {
    const { value } = e.target;
    const obj = state;
    if (value === 'AC') setState({ total: '0', next: null, operation: null });
    else setState(() => calculate(obj, value));
  };

  const getResult = () => {
    const newObj = { ...state };
    const numOne = newObj.total;
    const numTwo = newObj.next;
    const operator = newObj.operation;
    const result = operate(numOne, numTwo, operator);
    newObj.total = result;
    newObj.next = null;
    newObj.operation = null;
    setState(newObj);
  };

  return (
    <div className="container">
      <h1>Let&#39;s do some math!</h1>
      <div className="calculator">
        <Display input={state} />
        <Keyboard getValue={getValue} getResult={getResult} />
      </div>
    </div>
  );
};

export default Calculator;
