import React, { useContext } from 'react';
import AppContext from '../AppContext';

export default () => {
  const { handleBackButton } = useContext(AppContext);
  return (
    <button type="button" onClick={() => handleBackButton()}>
      &#8602;
    </button>
  );
};
