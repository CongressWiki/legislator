import styled from 'styled-components';
import StampTexture from '@static/images/StampTexture.png';

const StampText = styled.span`
  max-width: 16ch;

  padding: 2px;

  overflow: hidden;

  font-family: century_supra_c3;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-stamp);
  font-size: 1.4rem;
  font-weight: bold;

  border: 8px solid var(--color-stamp);

  mask-image: url(${StampTexture});
  mask-size: fit-content;
  mask-position: 60% 40%;
  mix-blend-mode: normal;
`;
export default StampText;
