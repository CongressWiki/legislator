import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingBallsAnimation = () => {
  return (
    <motion.svg height="20px" width="33px">
      <StyledCircle
        cx="15%"
        cy="95%"
        r="2px"
        fill="var(--color-primary)"
        animate={bounceMotionAnimation}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.4,
        }}
      />
      <StyledCircle
        cx="50%"
        cy="95%"
        r="2px"
        fill="var(--color-primary)"
        animate={bounceMotionAnimation}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.4,
          delay: 0.1,
        }}
      />
      <StyledCircle
        cx="85%"
        cy="95%"
        r="2px"
        fill="var(--color-primary)"
        animate={bounceMotionAnimation}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.4,
          delay: 0.2,
        }}
      />
    </motion.svg>
  );
};

const bounceMotionAnimation = {
  cy: ['90%', '40%', '30%'],
  scaleX: [1.3, 1, 1],
  scaleY: [0.7, 1, 1],
};

export default LoadingBallsAnimation;

const StyledCircle = styled(motion.circle)``;
