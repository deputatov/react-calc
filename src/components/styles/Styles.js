import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  .num-pad {
    /* grid-area: numbers; */
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 400px;
    margin: 0 auto;
    button {
      width: 100%;
      height: 80px;
      border: 2px solid black;
      font-size: 2rem;
      color: black;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 30px;
  grid-template-columns: 1fr;
  border: 3px solid black;
  max-width: 400px;
  margin: 10px auto;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    text-align: right;
  }
`;
