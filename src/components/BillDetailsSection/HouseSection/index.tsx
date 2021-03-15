import React from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import HouseOfRepresentatives from '@components/icons/HouseOfRepresentatives';
import Wrapper from '@components/BillDetailsSection/Wrapper';

export type HouseSectionProps = {
  className?: string;
};

const HouseSection = ({ className }: HouseSectionProps) => {
  return (
    <Wrapper className={className}>
      <Container>
        <SectionTitle>House</SectionTitle>
        <ContentWrapper>
          <HouseOfRepresentativesStyled />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const HouseOfRepresentativesStyled = styled(HouseOfRepresentatives)`
  padding-top: 2rem;
  align-self: end;
  width: 300px;
  height: auto;

  @media (max-width: 600px) {
    width: 200px;
  }
`;

export default HouseSection;
