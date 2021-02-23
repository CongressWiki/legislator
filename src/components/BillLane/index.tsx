import React from 'react';
import styled from 'styled-components';

const BillLane = styled.div`
  width: 100%;
  height: 200vh;
  padding: 0;

  display: grid;

  grid-template-columns: 1fr;

  justify-content: start;
  justify-items: center;
  align-items: start;
  align-content: start;

  border: 0;
  border-top: none;
  border-radius: 0;
  border-left: solid thin var(--color-gray300);
  border-right: solid thin var(--color-gray300);
`;

export default BillLane;
