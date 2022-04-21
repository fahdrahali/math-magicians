import { checkPropTypes } from 'prop-types';
import React, { Component } from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Input extends Component {
  render() {
    const { input } = this.props;
    return (
      <>
        <input className="input" type="text" value={input} disabled />
      </>
    );
  }
}

Input.propTypes = {
  input: checkPropTypes.string.isRequired,
};
export default Input;
