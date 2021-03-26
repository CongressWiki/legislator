import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type RotatingButtonProps = {
  className: string;
};

const RotatingButton = ({ className }: RotatingButtonProps) => (
  <Wrapper
    className={className}
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
  />
);

export default RotatingButton;

const Wrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: solid thin var(--color-gold);
  border-radius: 10px;
`;
