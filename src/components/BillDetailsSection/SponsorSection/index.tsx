import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from '@components/Image';
import type { OfficialWithImage, Cosponsorship } from '@type/hasura';
import CircleAvatar from '@components/CircleAvatar';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/SectionRibbon';
import Avatar from '@components/Avatar';
import { isBrowser } from '@constants';

export type SponsorSectionProps = {
  sponsor: OfficialWithImage;
  cosponsors: Cosponsorship[];
  className?: string;
};

const SponsorSection = ({
  sponsor,
  cosponsors,
  className,
}: SponsorSectionProps) => {
  const [cosponsorAvatarSize, setCosponsorAvatarSize] = useState('80px');

  useEffect(() => {
    if (isBrowser) {
      const mediaQuery420pxScreenWidth = window?.matchMedia(
        '(max-width: 420px)'
      );
      const isScreenWidthLessThan420px = mediaQuery420pxScreenWidth.matches;
      const mediaQuery1200pxScreenWidth = window?.matchMedia(
        '(max-width: 1200px)'
      );
      const isScreenWidthLessThan1200px = mediaQuery1200pxScreenWidth.matches;
      const mediaQuery1400pxScreenWidth = window?.matchMedia(
        '(max-width: 1400px)'
      );
      const isScreenWidthLessThan1400px = mediaQuery1400pxScreenWidth.matches;
      setCosponsorAvatarSize(
        isScreenWidthLessThan420px
          ? '50px'
          : isScreenWidthLessThan1200px
          ? '60px'
          : isScreenWidthLessThan1400px
          ? '70px'
          : '80px'
      );
    }
  }, [cosponsorAvatarSize]);

  return (
    <Wrapper className={className}>
      <Container>
        <SectionTitle>Sponsors</SectionTitle>
        <SponsorContentWrapper>
          <SponsorSpotlight>
            <SponsorState>{sponsor.state}</SponsorState>
            <SponsorFrame>
              <Image
                imageData={sponsor.image}
                alt={sponsor.preferred_name}
                loading="eager"
              />
            </SponsorFrame>
            <p>{sponsor.preferred_name}</p>
          </SponsorSpotlight>
          <CosponsorsGroup>
            {cosponsors.slice(0, 11).map((cosponsor: Cosponsorship) => {
              const { elected_official } = cosponsor;
              return (
                <Tooltip key={elected_official.id}>
                  <CosponsorAvatar
                    className="avatar"
                    name={elected_official.preferred_name}
                    party={elected_official.political_party}
                    state={elected_official.state}
                    imageData={elected_official.image}
                    backgroundColor="var(--color-gray700)"
                    size={cosponsorAvatarSize}
                    loading="eager"
                  />
                  <span className="tooltiptext">
                    {elected_official.preferred_name}
                  </span>
                </Tooltip>
              );
            })}
            {/* <OverflowCosponsorAvatar party="any" size={CosponsorAvatarSize}>
              <p>{cosponsors.length - 12} </p>
            </OverflowCosponsorAvatar> */}
          </CosponsorsGroup>
        </SponsorContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default SponsorSection;

const SponsorContentWrapper = styled(ContentWrapper)`
  @media (max-width: 400px) {
    /* flex-direction: column; */
  }
`;

const SponsorSpotlight = styled.div`
  position: relative;
  overflow: show;
  max-height: calc(100% - 2rem);
  min-width: fit-content;

  margin-top: 2rem;
  margin-right: 1rem;

  display: inline-block;

  p {
    margin: 0;
    padding: 0;
    padding-top: 0.7rem;
    text-align: center;
    font-family: century_supra_t3;
    font-size: 1rem;
    font-style: italic;
  }
`;

const SponsorState = styled.span`
  position: absolute;
  top: -27px;
  right: -17px;
  text-shadow: 2px 2px var(--color-background);
  font-family: advocate_c43_mid;
  font-size: 3rem;
  z-index: 1000;

  @media (max-width: 400px) {
    top: -15px;
    right: -15px;
    font-size: 2rem;
  }
`;

const SponsorFrame = styled.div`
  position: relative;
  max-width: 200px;
  min-width: 200px;
  max-height: calc(100% - 2rem);
  align-items: center;

  margin: 0;
  margin-left: 1rem;
  display: flex;
  overflow: hidden;

  border: solid 1px var(--color-gold);
  box-shadow: 0 0 5px 2px var(--color-gold);

  @media (max-width: 400px) {
    min-width: 140px;
    max-width: 140px;
    /* width: 200px; */
    /* height: auto; */
  }
`;

const CosponsorsGroup = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: flex-end;
  justify-content: flex-start;
  column-gap: 0;
  /* row-gap: 40px; */

  @media (max-width: 1200px) {
    min-width: 216px;
  }

  @media (max-width: 900px) {
    /* flex-direction: column; */
    align-content: stretch;
    min-width: 140px;
    column-gap: 10px;
  }
`;

const CosponsorAvatar = styled(CircleAvatar)`
  justify-self: center;
  transition: all 0.3s ease-in-out;
  margin-left: -1em;

  margin-bottom: 10px;
  padding: 0;
`;

const OverflowCosponsorAvatar = styled(Avatar)`
  justify-self: center;
  transition: all 0.3s ease-in-out;
  margin-left: -1em;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0;

  background-color: var(--color-gray300);
  border-color: var(--color-gray300);

  p {
    margin: 0;
    padding: 0;
    white-space: wrap;
  }
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  transition: all 1s;
  margin: 0;
  padding: 0;
  min-width: fit-content;
  min-height: fit-content;

  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: var(--color-bill);

    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 500;
    top: 125%;
    left: 40%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 800;
    font-style: italic;
  }

  .tooltiptext::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: rotate(180deg);
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--color-bill) transparent transparent transparent;
  }

  :hover {
    .tooltiptext {
      visibility: visible;
      opacity: 1;
    }

    .avatar {
      z-index: 1000;
      transform: scale(1.5);
    }
  }
`;
