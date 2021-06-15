import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type SectionRibbonProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionRibbon = ({ children, className }: SectionRibbonProps) => (
  <Wrapper className={className} variants={motionVariants}>
    {children}
  </Wrapper>
);

const Wrapper = styled(motion.div)`
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

export default SectionRibbon;
