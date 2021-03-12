import React from 'react';
import styled from 'styled-components';
import Image from '@components/Image';
// import FancyFrame from '@static/images/Basic_Fancy_frame.svg';
import type { Official } from '@type/hasura';
import CircleAvatar from '@components/CircleAvatar';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/Wrapper';

export type SponsorSectionProps = {
  sponsor: Official;
  sponsorImage: any;
  cosponsors: Official[];
  cosponsorImages: any[];
  className?: string;
};

const SponsorSection = ({
  sponsor,
  sponsorImage,
  cosponsors,
  cosponsorImages,
  className,
}: SponsorSectionProps) => {
  function findCosponsorImage(cosponsorId: string) {
    return cosponsorImages.find(
      (cosponsorImage) => cosponsorImage.name === cosponsorId
    );
  }

  return (
    <Wrapper className={className}>
      <Container>
        <ContentWrapper>
          <SectionTitle>Sponsors</SectionTitle>
          <SponsorSpotlight>
            <SponsorFrame name={sponsor.preferred_name}>
              <Image
                imageData={sponsorImage}
                alt={sponsor.preferred_name}
                loading="eager"
              />
            </SponsorFrame>
            <p>{sponsor.preferred_name}</p>
          </SponsorSpotlight>
          <CosponsorsGroup>
            {cosponsors.slice(0, 10).map((cosponsor) => {
              return (
                <Tooltip key={cosponsor.id}>
                  <CosponsorAvatar
                    name={cosponsor.preferred_name}
                    party={cosponsor.political_party}
                    imageData={findCosponsorImage(cosponsor.id)}
                    backgroundColor="var(--color-gray700)"
                    size="80px"
                    loading="eager"
                  />
                  <span className="tooltiptext">
                    {cosponsor.preferred_name}
                  </span>
                </Tooltip>
              );
            })}
          </CosponsorsGroup>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default SponsorSection;

const SponsorSpotlight = styled.div`
  p {
    margin: 0;
    padding: 0;
    padding-top: 0.7rem;
    text-align: center;
    font-family: century_supra_t3;
    font-size: 1rem;
    font-style: italic;
    color: var(--color-gray700);
  }
`;

const SponsorFrame = styled.div<{ name: string }>`
  position: relative;
  height: fit-content;
  min-width: 200px;
  margin: 0;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;

  border: solid 1px hsl(45, 81%, 53%);
  -webkit-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.75);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 900px) {
    min-width: 100px;
  }
`;

const CosponsorsGroup = styled.div`
  position: relative;
  min-height: calc(100% - 1.5rem);
  min-width: 280px;

  display: flex;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  gap: 1rem;
  align-items: flex-end;

  @media (max-width: 900px) {
    flex-direction: column;
    min-width: 300px;
  }
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  /* justify-self: center; */

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
    left: 50%;
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

  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const CosponsorAvatar = styled(CircleAvatar)`
  justify-self: center;
  -webkit-box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.75);
`;
