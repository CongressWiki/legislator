import React from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/Wrapper';
import { RollCall } from '@type/hasura';
import RollCallSlide from '@components/BillDetailsSection/RollCallSlide';
import Calendar from '@components/icons/Calendar';

export type HouseSectionProps = {
  rollCalls: RollCall[];
  className?: string;
};

const HouseSection = ({ rollCalls, className }: HouseSectionProps) => {
  const hasRollCalls = rollCalls.length > 0;
  return (
    <HouseSectionWrapper className={className}>
      <Container>
        <SectionTitle>House</SectionTitle>
        <ContentWrapper>
          {hasRollCalls ? (
            rollCalls
              .slice(0, 1)
              .map((rollCall) => (
                <RollCallSlide key={rollCall.id} rollCall={rollCall} />
              ))
          ) : (
            <Calendar />
          )}
        </ContentWrapper>
      </Container>
    </HouseSectionWrapper>
  );
};

const HouseSectionWrapper = styled(Wrapper)``;

export default HouseSection;
