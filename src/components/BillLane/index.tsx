import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type BillLaneProps = {
  children: React.ReactNode;
  gap?: string;
  className?: string;
};

const BillLane = ({ children, className, gap }: BillLaneProps) => (
  <Wrapper
    className={className}
    variants={motionVariants}
    initial="hidden"
    animate="visible"
    gap={gap}
  >
    {children}
  </Wrapper>
);

export default BillLane;

const motionVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Wrapper = styled(motion.div)<{ gap?: string }>`
  width: 100%;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ gap }) => gap || '32px'};

  border: none;
  background: var(--color-background);
  border-radius: 0;

  @media (max-width: 600px) {
    border: none;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
