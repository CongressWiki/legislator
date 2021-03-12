import React from 'react';
import styled from 'styled-components';
import SponsorSection from '@components/BillDetailsSection/SponsorSection';
import SenateSection from '@components/BillDetailsSection/SenateSection';
import HouseSection from '@components/BillDetailsSection/HouseSection';
import PresidentSection from '@components/BillDetailsSection/PresidentSection';
import type { Official } from '@type/hasura';

export type BillDetailsProps = {
  sponsor: Official;
  sponsorImage: any;
  cosponsors: Official[];
  cosponsorImages: any[];
  className?: string;
};

const BillDetails = ({
  sponsor,
  sponsorImage,
  cosponsors,
  cosponsorImages,
  className,
}: BillDetailsProps) => {
  return (
    <Wrapper className={className}>
      <SponsorSection
        sponsor={sponsor}
        sponsorImage={sponsorImage}
        cosponsors={cosponsors}
        cosponsorImages={cosponsorImages}
      />

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
  margin-bottom: 50vh;
`;
