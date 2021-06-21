import React from 'react';
import styled from 'styled-components';
import Section from '@components/molecules/BillDetailsSection';
import type { OfficialWithImage, Cosponsorship } from '@type/hasura';
import { motion } from 'framer-motion';
import SponsorSlide from '@components/molecules/BillDetailsSection/SponsorSlide';
import ActionsDeck, {
  ActionWithRollCall,
} from '@components/molecules/BillDetailsSection/ActionsDeck';

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
      <Section title="Sponsors">
        <SponsorSlide sponsor={sponsor} cosponsors={cosponsors} />
      </Section>

      <Section title="House">
        <ActionsDeck actions={houseActions} />
      </Section>

      <Section title="Senate">
        <ActionsDeck actions={senateActions} />
      </Section>

      <Section title="President">
        <ActionsDeck actions={presidentActions} />
      </Section>
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
