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
  max-width: 40ch;
  height: 100%;

  overflow: auto;

  padding: 1rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: left;
  justify-content: start;

  background-color: transparent;
`;
