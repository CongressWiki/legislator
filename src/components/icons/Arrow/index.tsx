import { ReactComponent as ArrowSvg } from '@static/images/Arrow.svg';
import styled from 'styled-components';

const ArrowIcon = styled(ArrowSvg)`
  margin: 0;
  width: 100%;
  height: 100%;

  path {
    fill: var(--color-text);
  }
`;

export default ArrowIcon;
