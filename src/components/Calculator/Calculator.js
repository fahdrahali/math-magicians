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
    const calculator = ['AC', '+/-', '%', '+', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    return (
      <div>
        <div className="container">
          <input type="number" value={result} />
        </div>
        {calculator.map((item) => <div key={item}>{item}</div>)}
      </div>
    );
  }
}

export default Calculator;
