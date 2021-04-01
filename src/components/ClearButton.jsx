import React, { useContext } from 'react';
import AppContext from '../AppContext';

export default () => {
  const { handleClearValue } = useContext(AppContext);
  return (
    <button type="button" onClick={() => handleClearValue()}>
      C
    </button>
  );
};
