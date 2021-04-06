import React from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/SectionRibbon';
import { RollCall } from '@type/hasura';
import RollCallSlide from '@components/RollCallSlide';
import Calendar from '@icons/misc/Calendar';

export type SenateSectionProps = {
  rollCalls: RollCall[];
  className?: string;
};

const SenateSection = ({ rollCalls, className }: SenateSectionProps) => {
  const hasRollCalls = rollCalls.length > 0;
  return (
    <SenateSectionWrapper className={className}>
      <Container>
        <SectionTitle>Senate</SectionTitle>
        <ContentWrapper>
          {hasRollCalls ? (
            rollCalls
              .slice(0, 1)
              .map((rollCall) => (
                <RollCallSlide key={rollCall.id} rollCall={rollCall} />
              ))
          ) : (
            <Calendar className="image" />
          )}
        </ContentWrapper>
      </Container>
    </SenateSectionWrapper>
  );
};

const SenateSectionWrapper = styled(Wrapper)`
  /* overflow-x: hidden; */
`;

export default SenateSection;
