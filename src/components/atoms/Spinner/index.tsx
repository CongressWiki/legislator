import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type SpinnerProps = {
  className?: string;
};

const Spinner = ({ className = '' }: SpinnerProps) => {
  return (
    <SpinnerBox className={className}>
      <ThreeQuarterSpinner
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </SpinnerBox>
  );
};

export default Spinner;

const SpinnerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: bottom;
  background-color: transparent;
`;

const ThreeQuarterSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid var(--color-text);
  border-top: 3px solid transparent;
  border-radius: 50%;
`;
