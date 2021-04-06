import React from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/SectionRibbon';
import Calendar from '@icons/misc/Calendar';

export type PresidentSectionProps = {
  className?: string;
};

const PresidentSection = ({ className }: PresidentSectionProps) => {
  return (
    <Wrapper className={className}>
      <Container>
        <SectionTitle>President</SectionTitle>
        <ContentWrapper>
          <Calendar className="image" />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default PresidentSection;
