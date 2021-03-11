import React from 'react';
import styled from 'styled-components';
import SponsorSection from '@components/BillDetailsSection/SponsorSection';
import SenateSection from '@components/BillDetailsSection/SenateSection';
import HouseSection from '@components/BillDetailsSection/HouseSection';
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
      <Section className="sponsors">
        <SponsorSection
          className="content"
          sponsor={sponsor}
          sponsorImage={sponsorImage}
          cosponsors={cosponsors}
          cosponsorImages={cosponsorImages}
        />
      </Section>
      {/* <HouseSection /> */}
      {/* <SenateSection /> */}
    </Wrapper>
  );
};

export default BillDetails;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-auto-rows: 400px;
  grid-row-gap: 50px;

  .sponsors {
    background: #2980b9; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #ffffff,
      #6dd5fa,
      #2980b9
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #ffffff,
      #6dd5fa,
      #2980b9
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;

export const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'content bill';

  .content {
    grid-area: content;
  }
`;
