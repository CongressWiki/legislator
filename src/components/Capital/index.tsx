import { ReactComponent as CapitalSvg } from '../../images/Capital.svg';
import styled from 'styled-components';

const Capital = styled(CapitalSvg)`
  margin: 0;
  width: 10vw;

  path {
    fill: var(--color-secondary);
  }
`;

export default Capital;
