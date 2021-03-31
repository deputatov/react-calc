import React, { useContext } from 'react';
import AppContext from '../AppContext';

export default ({ value }) => {
  const { handleSetDisplayValue } = useContext(AppContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(value)}>
      {value}
    </button>
  );
};
