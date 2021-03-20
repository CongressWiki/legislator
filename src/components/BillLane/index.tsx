import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type BillLaneProps = {
  children: React.ReactNode;
};

const BillLane = styled(motion.div)`
  width: 100%;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: 1fr;

  border: none;
  background: var(--color-background);
  border-radius: 0;
  border-left: solid thin var(--color-gray300);
  border-right: solid thin var(--color-gray300);

  @media (max-width: 600px) {
    border: none;
  }
`;

const motionVariant = {
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

export default ({ children }: BillLaneProps) => (
  <BillLane variants={motionVariant} initial="hidden" animate="visible">
    {children}
  </BillLane>
);
