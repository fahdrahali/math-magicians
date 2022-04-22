import React, { useState } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import calculate from '../../logic/calculate';
import operate from '../../logic/operate';
import Keyboard from '../Keyboard/Keyboard';

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
      <Display input={state} />
      <Keyboard getValue={getValue} getResult={getResult} />
    </div>
  );
};

export default Calculator;
