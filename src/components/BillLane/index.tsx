import React from 'react';
import styled from 'styled-components';

const BillLane = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: 1fr;

  border: none;
  border-radius: 0;
  border-left: solid thin var(--color-gray300);
  border-right: solid thin var(--color-gray300);
`;

export default BillLane;