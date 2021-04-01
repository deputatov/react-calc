import React, { useContext } from 'react';
import AppContext from '../AppContext';
import { DisplayStyles } from './styles/Styles';

export default () => {
  const { number, storedNumber } = useContext(AppContext);

  return (
    <DisplayStyles>
      <h2>{number || storedNumber}</h2>
    </DisplayStyles>
  );
};
