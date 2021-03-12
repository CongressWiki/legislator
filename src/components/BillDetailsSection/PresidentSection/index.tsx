import React from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/Wrapper';

export type PresidentSectionProps = {
  className?: string;
};

const PresidentSection = ({ className }: PresidentSectionProps) => {
  return (
    <Wrapper className={className}>
      <Container>
        <ContentWrapper>
          <SectionTitle>President</SectionTitle>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default PresidentSection;
