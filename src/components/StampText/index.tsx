import React from 'react';
import styled from 'styled-components';
import StampTexture from '@static/images/StampTexture.png';

// export type StampTextProps = {
//   text: string;
// };

// const StampText = ({ text }: StampTextProps) => {
//   return <Wrapper>{text}</Wrapper>;
// };

const StampText = styled.span`
  align-self: center;
  padding: 0.25rem 0.5rem;
  display: block;
  min-width: fit-content;
  max-width: 2ch;
  min-height: fit-content;

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
`;
export default StampText;
