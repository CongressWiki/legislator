import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type SectionRibbonProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionRibbon = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: block;
`;

const motionVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default ({ children, className }: SectionRibbonProps) => (
  <SectionRibbon className={className} variants={motionVariants}>
    {children}
  </SectionRibbon>
);
