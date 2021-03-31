import React, { useContext } from 'react';
import AppContext from '../AppContext';

export default () => {
  const { handleToggleNegative } = useContext(AppContext);
  return (
    <button type="button" onClick={() => handleToggleNegative()}>
      -/+
    </button>
  );
};
