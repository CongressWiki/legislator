import React from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/Wrapper';

export type SenateSectionProps = {
  className?: string;
};

const SenateSection = ({ className }: SenateSectionProps) => {
  return (
    <Wrapper className={className}>
      <Container>
        <SectionTitle>Senate</SectionTitle>
        <ContentWrapper></ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default SenateSection;
