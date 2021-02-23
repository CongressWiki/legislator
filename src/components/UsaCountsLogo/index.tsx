import { ReactComponent as USAFlagMapLogoSvg } from '../../images/USA_Map_Spotted.svg';
import styled from 'styled-components';

const UsaCountsLogo = styled(USAFlagMapLogoSvg)`
  margin: 0;

  fill: var(--color-text);

  :hover {
    fill: var(--color-secondary);
  }
`;

export default UsaCountsLogo;
