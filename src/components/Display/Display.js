import { checkPropTypes } from 'prop-types';
import React from 'react';
import './Display.css';

const Display = (props) => {
  const { input } = props;
  return (
    <input
      className="input"
      type="text"
      value={`${input.total === null ? '' : input.total}${
        input.operation === null || input.operation === undefined ? '' : input.operation
      }${input.next === null ? '' : input.next}`}
      disabled
    />
  );
};

Display.propTypes = {
  input: checkPropTypes.isRequired,
};
export default Display;
