import React from 'react';
import styled from 'styled-components';
import BillDetailsSection from '@components/BillDetailsSection';

export type HouseSectionProps = {
  className?: string;
};

const HouseSection = ({ className }: HouseSectionProps) => {
  return (
    <HouseSectionWrapper className={className} variant="senate">
      <p>House</p>
    </HouseSectionWrapper>
  );
};

export default HouseSection;

const HouseSectionWrapper = styled(BillDetailsSection)`
  background: #215f00; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #ffffff,
    #215f00
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #ffffff,
    #215f00
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
