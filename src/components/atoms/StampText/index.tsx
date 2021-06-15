import styled from 'styled-components';
import StampTexture from '@static/images/StampTexture.png';

const StampText = styled.span`
  max-width: 16ch;

  overflow: hidden;
  align-self: center;
  padding: 0.25em;

  text-align: center;
  text-transform: uppercase;

  color: var(--color-stamp);
  font-size: 1.4em;
  font-weight: bold;

  mask-image: url(${StampTexture});
  -webkit-mask-image: url(${StampTexture});
  mask-size: 944px 604px;
  -webkit-mask-size: 944px 604px;
  mask-position: 13em 6em;
  -webkit-mask-position: 13em 6em;
  mix-blend-mode: normal;

  border: 0.5em solid var(--color-stamp);
`;
export default StampText;
