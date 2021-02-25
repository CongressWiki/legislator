import {ReactComponent as SortAscIconSvg} from '@static/images/Sort_Asc.svg';

import styled from 'styled-components';

const SortAscIcon = styled(SortAscIconSvg)`
  margin: 0;
  width: 2em;

  path {
    fill: var(--color-gray500);
  }
`;

export default SortAscIcon;
