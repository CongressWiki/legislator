import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SponsorSpotlight from '@components/SponsorSpotlight';
import type { OfficialWithImage, Cosponsorship } from '@type/hasura';
import TooltipAvatar from '@components/TooltipAvatar';
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
      const mediaQuery320pxScreenWidth = window?.matchMedia(
        '(max-width: 320px)'
      );
      const isScreenWidthLessThan320px = mediaQuery320pxScreenWidth.matches;
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
        isScreenWidthLessThan320px
          ? '50px'
          : isScreenWidthLessThan420px
          ? '60px'
          : isScreenWidthLessThan1200px
          ? '70px'
          : isScreenWidthLessThan1400px
          ? '70px'
          : '80px'
      );
    }
  }, []);

  return (
    <Wrapper className={className}>
      <Container>
        <SectionTitle>Sponsors</SectionTitle>
        <SponsorContentWrapper>
          <SponsorSpotlight sponsor={sponsor} />
          <CosponsorGroup>
            {cosponsors
              .slice(0, 12)
              .map(({ elected_official }: Cosponsorship) => {
                return (
                  <TooltipAvatar
                    key={elected_official.preferred_name}
                    className="avatar"
                    preferred_name={elected_official.preferred_name}
                    political_party={elected_official.political_party}
                    image={elected_official.image}
                    state={elected_official.state}
                    backgroundColor="var(--color-gray700)"
                    size={cosponsorAvatarSize}
                    loading="lazy"
                  />
                );
              })}

            {/* <OverflowCosponsorAvatar party="any" size={CosponsorAvatarSize}>
              <p>{cosponsors.length - 12} </p>
            </OverflowCosponsorAvatar> */}
          </CosponsorGroup>
        </SponsorContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default SponsorSection;

const SponsorContentWrapper = styled(ContentWrapper)`
  padding-top: 2rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
`;

const CosponsorGroup = styled.div`
  height: 100%;

  gap: 5px;

  display: flex;
  flex-wrap: wrap;
  align-items: space-evenly;
`;

const OverflowCosponsorAvatar = styled(Avatar)`
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0;

  justify-self: center;
  transition: all 0.3s ease-in-out;

  background-color: var(--color-gray300);
  border-color: var(--color-gray300);

  p {
    margin: 0;
    padding: 0;
    white-space: wrap;
  }
`;
