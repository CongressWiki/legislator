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
  >
    <AnimateSharedLayout>{children}</AnimateSharedLayout>
  </Wrapper>
);

export default BillLane;

const motionVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
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

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  border: none;
  background: var(--color-background);
  border-radius: 0;

  @media (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;
