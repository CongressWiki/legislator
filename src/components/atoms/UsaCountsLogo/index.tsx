import USAFlagMapLogoSvg from '@icons/misc/UsaMapSpotted';
import styled from 'styled-components';

const UsaCountsLogo = styled(USAFlagMapLogoSvg)`
  margin: 0;

  fill: var(--color-text);

  :hover {
    fill: var(--color-secondary);
  }
`;

export default UsaCountsLogo;
