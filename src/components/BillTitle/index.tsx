import React from 'react';
import styled from 'styled-components';

export type BillTitleProps = {
  title: string;
};

export default function BillTitle({ title }: BillTitleProps) {
  // If title is long, reduce size
  if (title.length > 200) {
    return (
      <Wrapper
        style={{
          fontSize: 'calc(48px/5 * 3)',
          lineHeight: 'calc(60px/5 * 3)',
        }}
      >
        {title}
      </Wrapper>
    );
  }

  if (title.length > 100) {
    return (
      <Wrapper
        style={{
          fontSize: 'calc(48px/4 * 3)',
          lineHeight: 'calc(60px/4 * 3)',
        }}
      >
        {title}
      </Wrapper>
    );
  }
  return <Wrapper>{title}</Wrapper>;
}

const Wrapper = styled.h3`
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.011em;
  font-weight: 400;
  padding-top: 26px;
  margin: 0;
  /* text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden; */
`;