import React from 'react';
import styled from 'styled-components';
import SponsorSection from '@components/BillDetailsSection/SponsorSection';
import SenateSection from '@components/BillDetailsSection/SenateSection';
import HouseSection from '@components/BillDetailsSection/HouseSection';
import PresidentSection from '@components/BillDetailsSection/PresidentSection';
import type { OfficialWithImage, Cosponsorship, RollCall } from '@type/hasura';
import { motion } from 'framer-motion';

export type BillDetailsProps = {
  sponsor: OfficialWithImage;
  cosponsors: Cosponsorship[];
  rollCalls: RollCall[];
  className?: string;
};

const BillDetails = ({
  sponsor,
  cosponsors,
  rollCalls,
  className,
}: BillDetailsProps) => {
  const houseRollCalls = rollCalls.filter(
    (rollCall) => rollCall.chamber === 'h'
  );
  const senateVotes = rollCalls.filter((rollCall) => rollCall.chamber === 's');

  return (
    <Wrapper
      className={className}
      variants={motionVariants}
      initial="hidden"
      animate="visible"
    >
      <SponsorSection sponsor={sponsor} cosponsors={cosponsors} />
      <HouseSection rollCalls={houseRollCalls} />
      <SenateSection rollCalls={senateVotes} />
      <PresidentSection />
    </Wrapper>
  );
};

const motionVariants = {
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

export default BillDetails;

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  display: grid;
  grid-auto-rows: 350px;
  grid-row-gap: 50px;
  margin-bottom: 50vh;

  @media (max-width: 900px) {
    margin-bottom: 50px;
  }
`;
