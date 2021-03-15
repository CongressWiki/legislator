import React from 'react';
import styled from 'styled-components';
import SponsorSection from '@components/BillDetailsSection/SponsorSection';
import SenateSection from '@components/BillDetailsSection/SenateSection';
import HouseSection from '@components/BillDetailsSection/HouseSection';
import PresidentSection from '@components/BillDetailsSection/PresidentSection';
import type { OfficialWithImage, Cosponsorship } from '@type/hasura';

export type BillDetailsProps = {
  sponsor: OfficialWithImage;
  cosponsors: Cosponsorship[];
  className?: string;
};

const BillDetails = ({ sponsor, cosponsors, className }: BillDetailsProps) => {
  return (
    <Wrapper className={className}>
      <SponsorSection sponsor={sponsor} cosponsors={cosponsors} />

      <HouseSection />
      <SenateSection />
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
`;
