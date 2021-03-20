import React from 'react';
import styled from 'styled-components';
import SponsorSection from '@components/BillDetailsSection/SponsorSection';
import SenateSection from '@components/BillDetailsSection/SenateSection';
import HouseSection from '@components/BillDetailsSection/HouseSection';
import PresidentSection from '@components/BillDetailsSection/PresidentSection';
import type { OfficialWithImage, Cosponsorship, RollCall } from '@type/hasura';

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
    <Wrapper className={className}>
      <SponsorSection sponsor={sponsor} cosponsors={cosponsors} />
      <HouseSection rollCalls={houseRollCalls} />
      <SenateSection rollCalls={senateVotes} />
      <PresidentSection />
    </Wrapper>
  );
};

export default BillDetails;

const Wrapper = styled.div`
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
