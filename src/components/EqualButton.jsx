import React, { useContext } from 'react';
import AppContext from '../AppContext';

export default () => {
  const { doMath } = useContext(AppContext);
  return (
    <button type="button" onClick={() => doMath()}>
      =
    </button>
  );
};
