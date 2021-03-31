import React, { useContext } from 'react';
import AppContext from '../AppContext';

export default () => {
  const { number } = useContext(AppContext);
  return <h2>{number}</h2>;
};
