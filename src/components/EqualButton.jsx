import React, { useContext } from 'react';
import AppContext from '../AppContext';

export default () => {
  const { doMath } = useContext(AppContext);
  return (
    <button className="equal-button" type="button" onClick={() => doMath()}>
      =
    </button>
  );
};
