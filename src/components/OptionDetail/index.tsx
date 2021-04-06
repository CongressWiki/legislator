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
    <Wrapper className={className} center={center} variants={motionVariants}>
      {['bills', 'cosponsorships', 'amendments'].includes(type) ? (
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
  width: 100%;

  margin: 0;
  padding-top: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;

  border: solid thin var(--color-gray300);
  border-radius: 10px;

  p {
    margin-top: 0;
  }

  .text {
    padding-bottom: 5px;
    margin-bottom: 0.5em;

    font-family: century_supra_c3;
    font-weight: 600;
    font-size: 1em;
    text-align: center;
  }

  .subtext {
    font-size: 1em;
    color: var(--color-dimText);
    text-align: ${(props) => (props.center ? 'center' : null)};
  }
`;
