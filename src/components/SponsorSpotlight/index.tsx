import React from 'react';
import styled from 'styled-components';
import type { OfficialWithImage } from '@type/hasura';
import Image from '@components/Image';
import { getPartyColors } from '@constants';
import { Link } from 'gatsby';

export type SponsorSpotlightProps = {
  sponsor: OfficialWithImage;
  className?: string;
};

const SponsorSpotlight = ({ sponsor }: SponsorSpotlightProps) => {
  return (
    <Wrapper>
      <Link to={`/officials/${sponsor.id}`}>
        <SponsorFrame color={getPartyColors(sponsor.political_party)}>
          <SponsorState className="state">{sponsor.state}</SponsorState>
          <Image
            imageData={sponsor.image}
            alt={sponsor.preferred_name}
            loading="eager"
          />
        </SponsorFrame>
        <SponsorLabel>{sponsor.preferred_name}</SponsorLabel>
      </Link>
    </Wrapper>
  );
};

export default SponsorSpotlight;

const Wrapper = styled.div`
  position: relative;
  max-height: calc(100% - 2rem);
  min-width: fit-content;

  margin-right: 1rem;
  margin-bottom: auto;

  display: inline-block;
`;

const SponsorFrame = styled.div<{ color: string }>`
  position: relative;
  max-width: fit-content;
  min-width: 200px;
  min-height: 100px;
  max-height: 250px;

  margin: 0;
  overflow: hidden;

  display: flex;
  align-items: center;

  border: solid 1px ${(props) => props.color};
  box-shadow: 0 0 5px 2px ${(props) => props.color};

  background-color: ${(props) => props.color};

  :hover {
    .state {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 450px) {
    min-width: 100px;
    max-width: 100px;
  }
`;

const SponsorState = styled.span`
  position: absolute;
  z-index: 100;
  top: 0px;
  right: 5px;

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;

  color: var(--color-gray700);
  font-family: advocate_c43_mid;
  font-size: 2.5rem;

  @media (max-width: 450px) {
    top: -15px;
    right: -15px;
    font-size: 2rem;
  }
`;

const SponsorLabel = styled.p`
  position: relative;
  width: 100%;

  margin: 0;
  padding: 0;
  padding-top: 0.7rem;

  text-align: center;

  font-family: century_supra_t3;
  font-size: 1rem;
  font-style: italic;
`;
