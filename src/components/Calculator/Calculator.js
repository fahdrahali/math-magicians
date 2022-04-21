import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    const calculator = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+'];
    return (
      <div className="container">
        <input className="input" type="text" dir="rtl" value={result} />
        {calculator.map((item) => <div className="item" key={item}>{item}</div>)}
        <div className="item num-0">0</div>
        <div className="item">.</div>
        <div className="item orange">=</div>
      </div>
    );
  }
}

export default Calculator;
