import React from 'react';
import styled from 'styled-components';

export type BillTitleProps = {
  title: string;
};

export default function BillTitle({ title }: BillTitleProps) {
  // If title is long, reduce size
  // if (title.length > 200) {
  //   return (
  //     <Wrapper
  //       style={{
  //         fontSize: 'calc(48px/5 * 3)',
  //         lineHeight: 'calc(60px/5 * 3)',
  //       }}
  //     >
  //       {title}
  //     </Wrapper>
  //   );
  // }

  // if (title.length > 100) {
  //   return (
  //     <Wrapper
  //       style={{
  //         fontSize: 'calc(48px/4 * 3)',
  //         lineHeight: 'calc(60px/4 * 3)',
  //       }}
  //     >
  //       {title}
  //     </Wrapper>
  //   );
  // }

  return <Wrapper>{title}</Wrapper>;
}

const Wrapper = styled.h2`
  /* font-size: 1.8rem; */
  line-height: 2rem;
  letter-spacing: -0.011rem;
  font-weight: 400;
  padding-top: 26px;
  margin: 0;
`;
