import React from 'react';
import styled from 'styled-components';
import OptionDetail from '@components/atoms/OptionDetail';
import BillLane from '@components/atoms/BillLane';

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
  padding: 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;

  text-align: left;

  background-color: transparent;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
