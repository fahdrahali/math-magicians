/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import calculate from '../../logic/calculate';
import operate from '../../logic/operate';
import Keyboard from '../Keyboard/Keyboard';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  getValue = (e) => {
    const { value } = e.target;
    const obj = this.state;
    if (value === 'AC') this.setState({ total: '0', next: null, operation: null });
    else this.setState(() => calculate(obj, value));
  };

  getResult = () => {
    const obj = this.state;
    const newObj = { ...obj };
    const numOne = newObj.total;
    const numTwo = newObj.next;
    const operator = newObj.operation;
    const result = operate(numOne, numTwo, operator);
    newObj.total = result;
    newObj.next = null;
    newObj.operation = null;
    this.setState(newObj);
  };

  render() {
    const obj = this.state;
    return (
      <div className="container">
        <Display input={obj} />
        <Keyboard getValue={this.getValue} getResult={this.getResult} />
      </div>
    );
  }
}

export default Calculator;
