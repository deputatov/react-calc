import React, { useContext } from 'react';
import AppContext from '../AppContext';

export default ({ value }) => {
  const { handleSetCalcFunction } = useContext(AppContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetCalcFunction(value)}>
      {value}
    </button>
  );
};
