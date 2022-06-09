import React from 'react';
import TestRenderer from 'react-test-renderer';
import Display from '../components/Display';

it('renders correctly', () => {
  const renderer = TestRenderer.create(
    <Display input={{ total: 0, next: '', operation: '' }} />,
  ).toJSON();
  expect(renderer).toMatchSnapshot(
    `
      <input
       className="input"
       disabled={true}
       type="text"
       value="0"
     />
      `,
  );
  // console.log(renderer);
});
