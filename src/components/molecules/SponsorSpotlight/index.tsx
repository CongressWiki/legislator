import React from 'react';
import styled from 'styled-components';
import type { OfficialWithImage } from '@type/hasura';
import Image from '@components/atoms/Image';
import { getPartyColors } from '@constants';
import { Link } from 'gatsby';

export type SponsorSpotlightProps = {
  sponsor: OfficialWithImage;
  className?: string;
};

const SponsorSpotlight = ({ sponsor }: SponsorSpotlightProps) => {
  const partyColor = getPartyColors(sponsor.political_party);
  return (
    <Wrapper>
      <Link to={`/officials/${sponsor.id}`}>
        <SponsorState className="state">{sponsor.state}</SponsorState>
        <SponsorFrame partyColor={partyColor}>
          <Image
            imageData={sponsor.image}
            alt={sponsor.preferred_name}
            loading="eager"
            className="image"
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

  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: auto;

  display: inline-block;

  .image {
    transition: all 0.3s;
  }

  :hover {
    .state {
      opacity: 1;
    }
    .image {
      transform: scale(1.1);
    }
  }
`;

const SponsorFrame = styled.div<{ partyColor: string }>`
  z-index: 2;
  position: relative;
  width: 184px;
  height: auto;

  margin: 0;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: ${(properties) => properties.partyColor};

  .image {
    z-index: 1;
    display: block;
    object-fit: cover;
    width: 100%;
    height: auto;
  }

  @media (max-width: 450px) {
    width: 80px;
  }
`;

const SponsorState = styled.span`
  position: absolute;
  z-index: 3;
  top: -20px;
  right: 5px;

  transition: opacity 0.3s;
  opacity: 0;

  color: var(--color-text);
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
