import React from 'react';
import type { Bill as BillData } from '@type/hasura';
import styled from 'styled-components';
// import BillText from '@components/BillText';
import BillSummary from '@components/BillSummary';
import BillTitle from '@components/BillTitle';
import StampText from '@components/StampText';
import { motion } from 'framer-motion';

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
  width: min(70ch, calc(100% - 32px));
  padding: 2rem;
  padding-bottom: 6rem;
  margin: 0;
  margin-bottom: 30vh;

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

  border: 1px groove hsl(40, 1%, 15%);
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
  margin-top: 1rem;
  transform: rotate(-8deg);

  @media (max-width: 400px) {
    margin-top: 0;
    min-width: unset;
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

const normalizeBillStatus = (result: string, originalChamber: string) => {
  switch (result) {
    case 'INTRODUCED':
      return `INTRODUCED IN ${originalChamber}`;
    case 'PASSED':
      return 'PASSED';
    case 'REFERRED':
      return 'REFERRED TO COMMITTEES';
    case 'REPORTED':
      return `REPORTED TO ${originalChamber}`;
    case 'PROV_KILL:SUSPENSIONFAILED':
      return 'PROV_KILL:SUSPENSIONFAILED';
    case 'PROV_KILL:CLOTUREFAILED':
      return 'PROV_KILL:CLOTUREFAILED';
    case 'FAIL:ORIGINATING:HOUSE':
      return 'FAIL:ORIGINATING:HOUSE';
    case 'FAIL:ORIGINATING:SENATE':
      return 'FAIL:ORIGINATING:SENATE';
    case 'PASSED:SIMPLERES':
      return `PASSED IN ${originalChamber}`;
    case 'PASSED:CONSTAMEND':
      return 'PASSED:CONSTAMEND';
    case 'PASS_OVER:HOUSE':
      return 'PASS_OVER:HOUSE';
    case 'PASS_OVER:SENATE':
      return 'PASS_OVER:SENATE';
    case 'PASSED:CONCURRENTRES':
      return 'PASSED:CONCURRENTRES';
    case 'FAIL:SECOND:HOUSE':
      return 'FAIL:SECOND:HOUSE';
    case 'FAIL:SECOND:SENATE':
      return 'FAIL:SECOND:SENATE';
    case 'PASS_BACK:HOUSE':
      return 'PASS_BACK:HOUSE';
    case 'PASS_BACK:SENATE':
      return 'PASS_BACK:SENATE';
    case 'PROV_KILL:PINGPONGFAIL':
      return 'PROV_KILL:PINGPONGFAIL';
    case 'PASSED:BILL':
      return 'PASSED:BILL';
    case 'CONFERENCE:PASSED:HOUSE':
      return 'CONFERENCE:PASSED:HOUSE';
    case 'CONFERENCE:PASSED:SENATE':
      return 'CONFERENCE:PASSED:SENATE';
    case 'ENACTED:SIGNED':
      return 'ENACTED:SIGNED';
    case 'PROV_KILL:VETO':
      return 'VETOED:POCKET';
    case 'VETOED:OVERRIDE_FAIL_ORIGINATING:HOUSE':
      return 'VETOED:OVERRIDE_FAIL_ORIGINATING:HOUSE';
    case 'VETOED:OVERRIDE_FAIL_ORIGINATING:SENATE':
      return 'VETOED:OVERRIDE_FAIL_ORIGINATING:SENATE';
    case 'VETOED:OVERRIDE_PASS_OVER:HOUSE':
      return 'VETOED:OVERRIDE_PASS_OVER:HOUSE';
    case 'VETOED:OVERRIDE_PASS_OVER:SENATE':
      return 'VETOED:OVERRIDE_PASS_OVER:SENATE';
    case 'VETOED:OVERRIDE_FAIL_SECOND:HOUSE':
      return 'VETOED:OVERRIDE_FAIL_SECOND:HOUSE';
    case 'VETOED:OVERRIDE_FAIL_SECOND:SENATE':
      return 'VETOED:OVERRIDE_FAIL_SECOND:SENATE';
    case 'ENACTED:VETO_OVERRIDE':
      return 'ENACTED:VETO_OVERRIDE';
    case 'ENACTED:TENDAYRULE':
      return 'ENACTED:TENDAYRULE';
  }
};

const getOriginalChamber = (type: string) => {
  const HOUSE = 'HOUSE';
  const SENATE = 'SENATE';

  switch (type) {
    case 's':
    case 'sres':
    case 'sjres':
      return SENATE;
    case 'hr':
    case 'hres':
    case 'hjres':
    default:
      return HOUSE;
  }
};
