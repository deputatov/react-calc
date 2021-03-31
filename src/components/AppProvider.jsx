import React, { useState } from 'react';
import AppContext from '../AppContext';

export default ({ children }) => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');
  console.log('number : ', number);
  console.log('storedNumber : ', storedNumber);
  console.log('functionType : ', functionType);

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

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <AppContext.Provider
      value={{ number, storedNumber, setNumber, handleSetDisplayValue, handleSetCalcFunction, doMath }}
    >
      {children}
    </AppContext.Provider>
  );
};
