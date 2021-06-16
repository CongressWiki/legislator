import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type SectionRibbonProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionRibbon = ({ children, className }: SectionRibbonProps) => (
  // @ts-expect-error styled-components type requires className for an unknown reason
  <Wrapper variants={motionVariants} className={className}>
    {children}
  </Wrapper>
);

const Wrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
`;

const motionVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default SectionRibbon;
