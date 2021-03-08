import React from 'react';
import styled from 'styled-components';

const ButtonCanvas = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;

  :hover {
    cursor: pointer;
    border: 2px var(--color-secondary) solid;

    svg {
      path {
        fill: var(--color-secondary);
      }
    }
  }
`;

export default ButtonCanvas;
