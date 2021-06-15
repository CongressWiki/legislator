import React from 'react';
import styled from 'styled-components';
import SponsorSection from '@components/molecules/BillDetailsSection/SponsorSection';
import Section, {
  ActionWithRollCall,
} from '@components/molecules/BillDetailsSection/Section';
import type { OfficialWithImage, Cosponsorship } from '@type/hasura';
import { motion } from 'framer-motion';

export type BillDetailsProps = {
  sponsor: OfficialWithImage;
  cosponsors: Cosponsorship[];
  houseActions: ActionWithRollCall[];
  senateActions: ActionWithRollCall[];
  presidentActions: ActionWithRollCall[];
  className?: string;
};

const BillDetails = ({
  sponsor,
  cosponsors,
  houseActions,
  senateActions,
  presidentActions,
  className,
}: BillDetailsProps) => {
  return (
    <Wrapper
      className={className}
      variants={motionVariants}
      initial="hidden"
      animate="visible"
    >
      <SponsorSection sponsor={sponsor} cosponsors={cosponsors} />
      <Section title="House" actions={houseActions} />
      <Section title="Senate" actions={senateActions} />
      <Section title="President" actions={presidentActions} />
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
  /* margin-bottom: 50vh; */

  /* @media (max-width: 900px) {
    margin-bottom: 50px;
  } */
`;
