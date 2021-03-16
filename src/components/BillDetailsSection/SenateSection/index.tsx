import React from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/Wrapper';
import { RollCall } from '@type/hasura';
import RollCallSlide from '@components/BillDetailsSection/RollCallSlide';

export type SenateSectionProps = {
  rollCalls: RollCall[];
  className?: string;
};

const SenateSection = ({ rollCalls, className }: SenateSectionProps) => {
  return (
    <SenateSectionWrapper className={className}>
      <Container>
        <SectionTitle>Senate</SectionTitle>
        <ContentWrapper>
          {rollCalls.slice(0, 1).map((rollCall) => (
            <RollCallSlide
              key={rollCall.id}
              rollCall={rollCall}
              toolTipOffsetX={640}
              toolTipOffsetY={980}
            />
          ))}
        </ContentWrapper>
      </Container>
    </SenateSectionWrapper>
  );
};

const SenateSectionWrapper = styled(Wrapper)`
  /* overflow-x: hidden; */
`;

export default SenateSection;
