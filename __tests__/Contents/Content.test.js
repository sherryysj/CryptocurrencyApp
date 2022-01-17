jest.useFakeTimers()

import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../../src/Contents/Content';

test('renders correctly', () => {
  const tree = renderer.create(<Content />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test All Coins and 24 Hours Volumn Button
// test fetchCoins
// test filters