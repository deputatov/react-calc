import React, { useContext } from 'react';
import AppContext from '../AppContext';

export default () => {
  const { number, storedNumber } = useContext(AppContext);

  return <h2>{number || storedNumber}</h2>;
};
