import React from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import CheckMark from '@components/Icons/CheckMark';
import HouseOfRepresentatives from '@components/Icons/HouseOfRepresentatives';
import Wrapper from '@components/BillDetailsSection/Wrapper';

export type HouseSectionProps = {
  className?: string;
};

const HouseSection = ({ className }: HouseSectionProps) => {
  return (
    <Wrapper className={className}>
      <Container>
        <ContentWrapper>
          <SectionTitle>House</SectionTitle>
          <CheckMark />
          <HouseOfRepresentatives />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default HouseSection;
