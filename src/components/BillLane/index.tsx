import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type BillLaneProps = {
  children: React.ReactNode;
  className?: string;
};

const BillLane = styled(motion.div)`
  width: 100%;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  border: none;
  background: var(--color-background);
  border-radius: 0;

  @media (max-width: 600px) {
    border: none;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

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

export default ({ children, className }: BillLaneProps) => (
  <BillLane
    className={className}
    variants={motionVariants}
    initial="hidden"
    animate="visible"
  >
    {children}
  </BillLane>
);
