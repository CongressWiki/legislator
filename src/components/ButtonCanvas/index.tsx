import React from 'react';
import styled from 'styled-components';

const ButtonCanvas = styled.div`
  width: 2.5em;
  height: 2.5em;

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

  svg {
    width: 100%;
    height: auto;

    text-align: center;

    path {
      fill: var(--color-gray500);
    }
  }

  :hover {
    cursor: pointer;

    svg {
      path {
        fill: var(--color-secondary);
      }
    }
  }
`;

export default ButtonCanvas;
