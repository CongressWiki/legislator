import React from 'react';
import styled from 'styled-components';
import type { OfficialWithImage } from '@type/hasura';
import Image from '@components/Image';

export type SponsorSpotlightProps = {
  sponsor: OfficialWithImage;
  className?: string;
};

const SponsorSpotlight = ({ sponsor }: SponsorSpotlightProps) => {
  return (
    <Wrapper>
      <SponsorState>{sponsor.state}</SponsorState>
      <SponsorFrame>
        <Image
          imageData={sponsor.image}
          alt={sponsor.preferred_name}
          loading="eager"
        />
      </SponsorFrame>
      <SponsorLabel>{sponsor.preferred_name}</SponsorLabel>
    </Wrapper>
  );
};

export default SponsorSpotlight;

const Wrapper = styled.div`
  position: relative;
  overflow: show;
  max-height: calc(100% - 2rem);
  min-width: fit-content;

  /* margin-top: 2rem; */
  margin-right: 1rem;

  display: inline-block;
`;

const SponsorState = styled.span`
  position: absolute;
  top: 0px;
  right: 5px;
  text-shadow: 2px 2px var(--color-background);
  font-family: advocate_c43_mid;
  font-size: 2.5rem;
  z-index: 1000;

  @media (max-width: 400px) {
    top: -15px;
    right: -15px;
    font-size: 2rem;
  }
`;

const SponsorFrame = styled.div`
  position: relative;
  max-width: fit-content;
  min-width: 200px;
  max-height: min(fit-content, calc(100% - 2rem));
  align-items: center;

  margin: 0;
  /* margin-left: 1rem; */
  display: flex;
  overflow: hidden;

  border: solid 1px var(--color-gold);
  box-shadow: 0 0 5px 2px var(--color-gold);

  @media (max-width: 400px) {
    min-width: 100px;
    max-width: 100px;
  }
`;

const SponsorLabel = styled.p`
  position: relative;
  margin: 0;
  padding: 0;
  padding-top: 0.7rem;
  text-align: center;
  font-family: century_supra_t3;
  font-size: 1rem;
  font-style: italic;
`;
