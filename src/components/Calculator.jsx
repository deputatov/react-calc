import React from 'react';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import Display from './Display';
import AppProvider from './AppProvider';
import EqualButton from './EqualButton';
import ClearButton from './ClearButton';
import NegativeButton from './NegativeButton';
import BackButton from './BackButton';

export default () => (
  <AppProvider>
    <div className="display">
      <Display />
    </div>
    <div className="num-pad">
      <ClearButton />
      <NegativeButton />
      <BackButton />
      <FunctionButton value="/" />
      <NumberButton value={7} />
      <NumberButton value={8} />
      <NumberButton value={9} />
      <FunctionButton value="*" />
      <NumberButton value={4} />
      <NumberButton value={5} />
      <NumberButton value={6} />
      <FunctionButton value="-" />
      <NumberButton value={1} />
      <NumberButton value={2} />
      <NumberButton value={3} />
      <FunctionButton value="+" />
      <NumberButton value={0} />
      <NumberButton value="." />
      <EqualButton />
    </div>
  </AppProvider>
);
