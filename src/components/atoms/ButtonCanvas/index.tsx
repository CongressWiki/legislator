import styled from 'styled-components';
import React from 'react';
import { motion } from 'framer-motion';

export type ButtonCanvasProps = {
  children: React.ReactNode;
  className?: string | undefined;
  onClick?: () => void;
};

const ButtonCanvas: React.FunctionComponent<ButtonCanvasProps> = ({
  children,
  onClick,
  className,
}: ButtonCanvasProps) => (
  <StyledButtonCanvas
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={className}
    onClick={onClick}
  >
    {children}
  </StyledButtonCanvas>
);

const StyledButtonCanvas = styled(motion.div)<ButtonCanvasProps>`
  width: 50px;
  min-width: 50px;
  height: 50px;

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
