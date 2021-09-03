import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type SectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, title, className }: SectionProps) => {
  return (
    <Wrapper className={className} variants={motionVariants}>
      <SectionTitle>{title}</SectionTitle>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Section;

const motionVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Wrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1050px) {
    justify-content: center;
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  position: relative;

  height: auto;

  margin: 0;
  padding: 0;

  text-align: right;
  padding-bottom: 1ch;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  color: var(--color-text);
  font-family: advocate_c43_mid;
  font-size: 2.5rem;
`;

const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 710px;
  height: 100%;

  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
