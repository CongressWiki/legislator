import React from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';

export type BillLaneProps = {
  children: React.ReactNode;
  gap?: string;
  className?: string;
};

const BillLane = ({ children, className = '' }: BillLaneProps) => (
  <Wrapper
    className={className}
    variants={motionVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <AnimateSharedLayout>{children}</AnimateSharedLayout>
  </Wrapper>
);

export default BillLane;

const motionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const Wrapper = styled(motion.div)`
  width: 100%;

  margin: 0;
  padding: 0;

  background-color: var(--color-background);
  /* background-color: var(--color-ribbon); */
  /* background-color: var(--color-paper); */

  border: none;
  border-radius: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;
