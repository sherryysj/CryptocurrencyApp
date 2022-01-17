jest.useFakeTimers()

import React from 'react';
import renderer from 'react-test-renderer';
import CoinList from '../../src/Contents/CoinList';
import coins from '../testData.json';

test('renders correctly', () => {
  const tree = renderer.create(<CoinList coins={coins}/>).toJSON();
  expect(tree).toMatchSnapshot();
});