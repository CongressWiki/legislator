import React from 'react';
import styled from 'styled-components';
// @ts-expect-error
import StampTexture from '@static/images/StampTexture.png';

// export type StampTextProps = {
//   text: string;
// };

// const StampText = ({ text }: StampTextProps) => {
//   return <Wrapper>{text}</Wrapper>;
// };

const StampText = styled.span`
  position: absolute;
  align-self: center;
  margin-bottom: 1rem;
  padding: 0.25rem 1rem;
  display: block;

  text-align: center;
  text-transform: uppercase;

  color: #0a9928;
  font-size: 2rem;
  font-weight: 700;

  mask-image: url(${StampTexture});
  -webkit-mask-image: url(${StampTexture});
  mask-size: 944px 604px;
  -webkit-mask-size: 944px 604px;
  mask-position: 13rem 6rem;
  -webkit-mask-position: 13rem 6rem;
  mix-blend-mode: normal;

  border: 0.5rem solid #0a9928;
  border-radius: 0;
`;
export default StampText;
