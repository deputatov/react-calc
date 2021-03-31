import React from 'react';
import NumberButton from './NumberButton';
import Display from './Display';
import AppProvider from './AppProvider';

export default () => (
  <AppProvider>
    <Display />
    <div className="num-pad">
      <NumberButton value={7} />
      <NumberButton value={8} />
      <NumberButton value={9} />
      <NumberButton value={4} />
      <NumberButton value={5} />
      <NumberButton value={6} />
      <NumberButton value={1} />
      <NumberButton value={2} />
      <NumberButton value={3} />
    </div>
  </AppProvider>
);
