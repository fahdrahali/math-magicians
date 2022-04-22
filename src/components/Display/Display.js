import { checkPropTypes } from 'prop-types';
import React, { Component } from 'react';
import './Display.css';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends Component {
  render() {
    const { input } = this.props;
    return (
      <>
        <input className="input" type="text" value={`${input.total === null ? '' : input.total}${input.operation === null ? '' : input.operation}${input.next === null ? '' : input.next}`} disabled />
      </>
    );
  }
}

Display.propTypes = {
  input: checkPropTypes.isRequired,
};
export default Display;
