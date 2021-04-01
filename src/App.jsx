import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';

export default () => {
  ReactDOM.render(
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
