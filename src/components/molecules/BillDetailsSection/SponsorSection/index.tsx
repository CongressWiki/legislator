import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SponsorSpotlight from '@components/molecules/SponsorSpotlight';
import type { OfficialWithImage, Cosponsorship } from '@type/hasura';
import TooltipAvatar from '@components/molecules/TooltipAvatar';
import SectionTitle from '@components/molecules/BillDetailsSection/SectionTitle';
import Container from '@components/molecules/BillDetailsSection/Container';
import ContentWrapper from '@components/molecules/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/molecules/BillDetailsSection/SectionRibbon';
import Avatar from '@components/atoms/Avatar';
import { isBrowser } from '@constants';
import { Link } from 'gatsby';

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
      const mediaQuery370pxScreenWidth = window?.matchMedia(
        '(max-width: 370px)'
      );
      const isScreenWidthLessThan370px = mediaQuery370pxScreenWidth.matches;
      const mediaQuery420pxScreenWidth = window?.matchMedia(
        '(max-width: 420px)'
      );
      const isScreenWidthLessThan420px = mediaQuery420pxScreenWidth.matches;
      const mediaQuery960pxScreenWidth = window?.matchMedia(
        '(max-width: 960px)'
      );
      const isScreenWidthLessThan960px = mediaQuery960pxScreenWidth.matches;
      const mediaQuery1400pxScreenWidth = window?.matchMedia(
        '(max-width: 1400px)'
      );
      const isScreenWidthLessThan1400px = mediaQuery1400pxScreenWidth.matches;
      setCosponsorAvatarSize(
        isScreenWidthLessThan370px
          ? '50px'
          : isScreenWidthLessThan420px
          ? '60px'
          : isScreenWidthLessThan960px
          ? '60px'
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
          {/* <Link key={sponsor.preferred_name} to={`/officials/${sponsor.id}`}>
            <TooltipAvatar
              className="avatar"
              preferred_name={sponsor.preferred_name}
              political_party={sponsor.political_party}
              image={sponsor.image}
              state={sponsor.state}
              backgroundColor="var(--color-gray700)"
              size="150px"
              loading="lazy"
            />
          </Link> */}
          <CosponsorGroup>
            {cosponsors
              .slice(0, 12)
              .map(({ elected_official }: Cosponsorship) => {
                return (
                  <Link
                    key={elected_official.preferred_name}
                    to={`/officials/${elected_official.id}`}
                  >
                    <TooltipAvatar
                      className="avatar"
                      preferred_name={elected_official.preferred_name}
                      political_party={elected_official.political_party}
                      image={elected_official.image}
                      state={elected_official.state}
                      backgroundColor="var(--color-gray700)"
                      size={cosponsorAvatarSize}
                      loading="lazy"
                    />
                  </Link>
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
  min-width: 320px;

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

  row-gap: 0;
  column-gap: 6px;

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
