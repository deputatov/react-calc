import React, { useState } from 'react';
import AppContext from '../AppContext';

export default ({ children }) => {
  const [number, setNumber] = useState('');

  const handleSetDisplayValue = (num) => setNumber((prev) => `${prev}${num}`);

  return (
    <AppContext.Provider value={{ number, setNumber, handleSetDisplayValue }}>
      {children}
    </AppContext.Provider>
  );
};
