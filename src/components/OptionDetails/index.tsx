import React from 'react';
import styled from 'styled-components';
import OptionDetail from '@components/OptionDetail';
import BillCard from '@components/BillCard';
import BillLane from '@components/BillLane';

export type OptionDetailsProps = {
  title: string;
  count: number;
  type:
    | 'bills'
    | 'amendments'
    | 'rollCalls'
    | 'committees'
    | 'subcommittees'
    | 'cosponsorships';
  details: Array<{
    text: string;
    subtext: string;
    slug: string;
  }>;
  className?: string;
};

const OptionDetails = ({
  title,
  count,
  type,
  details,
  className,
}: OptionDetailsProps) => {
  return (
    <Wrapper className={className} gap="27px">
      {details
        ? details.map(({ text, subtext, slug }, index) => (
          <OptionDetail
            key={text + index}
            text={text}
            subtext={subtext}
            slug={slug}
            type={type}
          />
        ))
        : null}
    </Wrapper>
  );
};

export default OptionDetails;

const Wrapper = styled(BillLane)`
  max-width: 40ch;
  height: 100%;

  overflow: auto;

  padding: 1rem;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'details';

  align-items: center;
  text-align: left;
  justify-content: start;

  background-color: transparent;

  .details {
    grid-area: details;
  }
`;
