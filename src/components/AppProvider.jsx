import React, { useState } from 'react';
import AppContext from '../AppContext';

export default ({ children }) => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleSetDisplayValue = (currNum) => {
    if ((!number.includes('.') || currNum !== '.') && number.length < 8) {
      setNumber(`${(number + currNum).replace(/^0+/, '')}`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const handleBackButton = () => {
    if (number !== '') {
      setNumber((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${parseFloat(storedNumber) + parseFloat(number)}`);
          break;
        case '-':
          setStoredNumber(`${parseFloat(storedNumber) - parseFloat(number)}`);
          break;
        case '/':
          setStoredNumber(`${parseFloat(storedNumber) / parseFloat(number)}`);
          break;
        case '*':
          setStoredNumber(`${parseFloat(storedNumber) * parseFloat(number)}`);
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <AppContext.Provider
      value={{
        number,
        storedNumber,
        setNumber,
        handleSetDisplayValue,
        handleSetCalcFunction,
        handleClearValue,
        handleToggleNegative,
        handleBackButton,
        doMath,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
