import React from 'react';
import styled from 'styled-components';
import Image from '@components/Image';
// import FancyFrame from '@static/images/Basic_Fancy_frame.svg';
import type { OfficialWithImage, Cosponsorship } from '@type/hasura';
import CircleAvatar from '@components/CircleAvatar';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/Wrapper';
import Avatar from '@components/Avatar';

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
  const mediaQuery420pxScreenWidth = window.matchMedia('(max-width: 420px)');
  const isScreenWidthLessThan420px = mediaQuery420pxScreenWidth.matches;
  const mediaQuery1200pxScreenWidth = window.matchMedia('(max-width: 1200px)');
  const isScreenWidthLessThan1200px = mediaQuery1200pxScreenWidth.matches;
  const mediaQuery1400pxScreenWidth = window.matchMedia('(max-width: 1400px)');
  const isScreenWidthLessThan1400px = mediaQuery1400pxScreenWidth.matches;
  const CosponsorAvatarSize = isScreenWidthLessThan420px
    ? '40px'
    : isScreenWidthLessThan1200px
    ? '60px'
    : isScreenWidthLessThan1400px
    ? '70px'
    : '80px';

  return (
    <Wrapper className={className}>
      <Container>
        <SectionTitle>Sponsors</SectionTitle>
        <ContentWrapper>
          <SponsorSpotlight>
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
                    imageData={elected_official.image}
                    backgroundColor="var(--color-gray700)"
                    size={CosponsorAvatarSize}
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
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default SponsorSection;

const SponsorSpotlight = styled.div`
  overflow: hidden;
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
    color: var(--color-gray700);

    @media (max-width: 600px) {
      font-size: 0.25rem;
    }
  }
`;

const SponsorFrame = styled.div`
  position: relative;
  max-width: 200px;
  min-width: 200px;
  /* min-height: 250px; */
  /* max-height: cover; */
  align-items: center;

  margin: 0;
  display: flex;
  overflow: hidden;

  border: solid 1px hsl(45, 81%, 53%);
  -webkit-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 900px) {
    min-width: 100px;
    width: 200px;
    height: auto;
  }

  @media (max-width: 600px) {
    min-width: 50px;
    width: 100px;
    height: auto;
  }
`;

const CosponsorsGroup = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  /* padding-right: 1rem; */

  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: flex-end;
  column-gap: 0;
  /* row-gap: 40px; */

  @media (max-width: 1200px) {
    min-width: 216px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-content: stretch;
    min-width: 100px;
  }
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  transition: all 1s;

  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: var(--color-gray300);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 500;
    bottom: 125%;
    left: 40%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--color-gray300) transparent transparent transparent;
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

const CosponsorAvatar = styled(CircleAvatar)`
  justify-self: center;
  transition: all 0.3s ease-in-out;
  margin-left: -1em;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0;

  -webkit-box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
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
