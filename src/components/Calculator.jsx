import React from 'react';
import AppProvider from './AppProvider';
import BackButton from './BackButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';
import FunctionButton from './FunctionButton';
import NumberButton from './NumberButton';
import NegativeButton from './NegativeButton';
import { CalculatorStyles } from './styles/Styles';

export default () => (
  <CalculatorStyles>
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
        <div className="zero-button">
          <NumberButton value={0} />
        </div>
        <NumberButton value="." />
        <EqualButton />
      </div>
    </AppProvider>
  </CalculatorStyles>
);
