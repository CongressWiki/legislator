import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

export type OptionDetailProps = {
  text: string;
  subtext: string;
  slug: string;
  type: string;
  className?: string;
};

const OptionDetail = ({
  text,
  subtext,
  slug,
  type,
  className,
}: OptionDetailProps) => {
  const center = ['rollCalls', 'committees', 'subcommittees'].includes(type);

  return (
    <Wrapper
      layout
      center={center}
      variants={motionVariants}
      className={className}
    >
      {[
        'bills',
        'cosponsorships',
        'amendments',
        'committees',
        'members',
      ].includes(type) ? (
        <Link to={slug}>
          <p className="text">{text}</p>
        </Link>
      ) : (
        <p className="text">{text}</p>
      )}
      <p className="subtext">{subtext}</p>
    </Wrapper>
  );
};

export default OptionDetail;

const motionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Wrapper = styled(motion.div)<{ center: boolean }>`
  width: 300px;

  margin: 0;
  padding-top: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;

  border: solid thin var(--color-text);
  border-radius: 10px;

  background-color: var(--color-card);

  :hover {
    background-color: var(--color-paper);
  }

  p {
    margin-top: 0;
  }

  .text {
    padding-bottom: 5px;
    margin-bottom: 0.5rem;

    font-family: century_supra_c3;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
  }

  .subtext {
    font-size: 1rem;
    color: var(--color-dimText);
    text-align: ${(properties) => (properties.center ? 'center' : null)};
  }
`;
