import React from 'react';
import styled from 'styled-components';
import Image from '@components/Image';
// import FancyFrame from '@static/images/Basic_Fancy_frame.svg';
import type { Official } from '@type/hasura';
import CircleAvatar from '@components/CircleAvatar';

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
      <SectionTitle>Sponsors</SectionTitle>
      <SponsorSpotlight name={sponsor.preferred_name}>
        <Image imageData={sponsorImage} alt={sponsor.preferred_name} />
      </SponsorSpotlight>
      <CosponsorsGroup>
        {cosponsors.slice(0, 24).map((cosponsor) => {
          return (
            <div className="tooltip">
              <CosponsorAvatar
                key={cosponsor.id}
                name={cosponsor.preferred_name}
                party={cosponsor.political_party}
                imageData={findCosponsorImage(cosponsor.id)}
                size="60px"
              />
              <span className="tooltiptext">{cosponsor.preferred_name}</span>
            </div>
          );
        })}
      </CosponsorsGroup>
    </Wrapper>
  );
};

export default SponsorSection;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  .tooltip {
    position: relative;
    display: inline-block;
    justify-self: center;
    align-self: center;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
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

  .tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const SectionTitle = styled.h2`
  position: relative;
  margin: 0;
  padding: 0;

  align-self: center;
  text-align: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: var(--color-secondary);
  font-family: century_supra_c3;
  font-size: 3rem;
  font-weight: 700;
`;

const SponsorSpotlight = styled.div<{ name: string }>`
  position: relative;
  width: 200px;
  height: 245px;
  margin: 0;
  margin-top: 2rem;
  margin-left: 20px;
  display: block;
  box-sizing: content-box;
  border: ridge 4px #f4be52;

  :after {
    content: '${(props) => props.name}';
    text-align: center;
  }
`;

const CosponsorAvatar = styled(CircleAvatar)`
  justify-self: center;
  align-self: center;
`;

const CosponsorsGroup = styled.div`
  width: 70%;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 1fr;

  flex-direction: row;
  flex-wrap: wrap;
`;
