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

  background: var(--color-ribbon);

  border-top: thin solid var(--color-primary);
  border-bottom: thin solid var(--color-primary);

  -webkit-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.75);
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
