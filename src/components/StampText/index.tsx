import React from 'react';
import styled from 'styled-components';
import StampTexture from '@static/images/StampTexture.png';

const StampText = styled.span`
  align-self: center;
  padding: 0.25rem;
  display: block;
  /* min-width: fit-content; */
  max-width: 100%;
  /* min-height: fit-content; */
  max-height: 100%;

  text-align: center;
  text-transform: uppercase;

  color: var(--color-yeaGreen);
  font-size: 2rem;
  font-weight: bold;

  mask-image: url(${StampTexture});
  -webkit-mask-image: url(${StampTexture});
  mask-size: 944px 604px;
  -webkit-mask-size: 944px 604px;
  mask-position: 13rem 6rem;
  -webkit-mask-position: 13rem 6rem;
  mix-blend-mode: normal;

  border: 0.5rem solid var(--color-yeaGreen);
`;
export default StampText;
