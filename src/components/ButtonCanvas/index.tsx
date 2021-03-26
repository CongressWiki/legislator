import React from 'react';
import styled from 'styled-components';

const ButtonCanvas = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  // Prevent highlighting on click
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

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
