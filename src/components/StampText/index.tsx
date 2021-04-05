import React from 'react';
import styled from 'styled-components';
import StampTexture from '@static/images/StampTexture.png';

const StampText = styled.span`
  align-self: center;
  padding: 0.25rem;
  /* min-width: fit-content; */
  /* min-height: fit-content; */
  overflow: hidden;
  width: auto;
  max-width: 80%;

  text-align: center;
  text-transform: uppercase;

  color: var(--color-yeaGreen);
  font-size: 1.5rem;
  font-weight: bold;

  mask-image: url(${StampTexture});
  -webkit-mask-image: url(${StampTexture});
  mask-size: 472px 302px;
  -webkit-mask-size: 472px 302px;
  mask-position: 13rem 6rem;
  -webkit-mask-position: 13rem 6rem;
  mix-blend-mode: normal;

  border: 0.5rem solid var(--color-yeaGreen);
`;
export default StampText;
