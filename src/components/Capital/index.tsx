import { ReactComponent as CapitalSvg } from '../../images/Capital_Detailed.svg';
import styled from 'styled-components';

const Capital = styled(CapitalSvg)`
  margin: 0;
  width: 100%;

  path {
    fill: var(--color-text);
  }
`;

export default Capital;
