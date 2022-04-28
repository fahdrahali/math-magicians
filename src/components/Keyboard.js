import { checkPropTypes } from 'prop-types';
import React, { Component } from 'react';

class Keyboard extends Component {
  getValue = (e) => {
    const { getValue } = this.props;
    getValue(e);
  };

  getResult = (e) => {
    const { getResult } = this.props;
    getResult(e);
  };

  render() {
    const calculator = [
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      'x',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
    ];
    return (
      <>
        {calculator.map((item) => (
          <button type="button" onClick={this.getValue} value={item} className="item" key={item}>
            {item}
          </button>
        ))}
        <button type="button" onClick={this.getValue} className="item num-0" value="0">
          0
        </button>
        <button type="button" onClick={this.getValue} className="item" value=".">
          .
        </button>
        <button type="button" onClick={this.getResult} className="item orange" value="=">
          =
        </button>
      </>
    );
  }
}

Keyboard.propTypes = { getValue: checkPropTypes.isRequired };
Keyboard.propTypes = { getResult: checkPropTypes.isRequired };

export default Keyboard;
