import React from 'react';
import type { Bill as BillData } from '@type/hasura';
import styled from 'styled-components';
// import BillText from '@components/BillText';
import BillSummary from '@components/BillSummary';
import BillTitle from '@components/BillTitle';
import StampText from '@components/StampText';
import { motion } from 'framer-motion';
import { getOriginalChamber, normalizeBillStatus } from '@constants';

export type BillProps = Pick<
  BillData,
  'type' | 'number' | 'status' | 'subject' | 'title' | 'bill_text' | 'summary'
> & { className?: string };

const Bill = ({
  type,
  number,
  status,
  // subject,
  title,
  // bill_text,
  summary,
  className,
}: BillProps) => {
  const originalChamber = getOriginalChamber(type);
  const billStatus = normalizeBillStatus(status, originalChamber);

  return (
    <Wrapper
      className={className}
      variants={motionVariants}
      initial="hidden"
      animate="visible"
    >
      <BillStatusStamp>{billStatus}</BillStatusStamp>
      <BillHeader>
        <BillId>
          {type}-{number}
        </BillId>
      </BillHeader>
      <BillTitle title={title} />
      <BillSummary summary={summary} />
    </Wrapper>
  );
};

export default Bill;

const motionVariants = {
  hidden: { opacity: 0, scale: 2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.7,
    },
  },
};

const Wrapper = styled(motion.div)`
  position: relative;
  width: min(70ch, calc(100% - 32px));
  padding: 2rem;
  padding-bottom: 6rem;
  margin: 0;
  margin-bottom: 30vh;
  overflow: hidden;

  /* https://www.css-gradient.com/?c1=2f2c28&c2=6c6051&gt=r&gd=dbb */
  background: var(--color-bill);
  background: -webkit-radial-gradient(
    bottom,
    'var(--color-billGradient1)',
    'var(--color-billGradient2)'
  );
  background: -moz-radial-gradient(
    bottom,
    'var(--color-billGradient1)',
    'var(--color-billGradient2)'
  );
  background: radial-gradient(
    to top,
    'var(--color-billGradient1)',
    'var(--color-billGradient2)'
  );

  border: 1px groove var(--color-bill);
  border-radius: 1px;

  -webkit-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const BillStatusStamp = styled(StampText)`
  position: absolute;
  margin-top: 0.25rem;
  max-width: 40%;

  // Alternate stamp angle to give it a realistic behavior
  transform: ${() => (Math.random() < 0.5 ? 'rotate(3deg)' : 'rotate(-8deg)')};

  @media (max-width: 450px) {
    margin-top: 0;
    max-width: 200px;
  }
`;

const BillHeader = styled.div`
  margin: 0;
  margin-top: 150px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

const BillId = styled.h2`
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
  text-transform: uppercase;
`;
