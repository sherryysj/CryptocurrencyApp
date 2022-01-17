jest.useFakeTimers()

import React from 'react';
import renderer from 'react-test-renderer';
import LineCoin from '../../src/Contents/LineCoin';
import coins from '../testData.json';

test('renders correctly', () => {
  const tree = renderer.create(<LineCoin coin={coins[0]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

// test currency form
// test filter