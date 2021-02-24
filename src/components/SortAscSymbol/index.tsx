import { ReactComponent as SortAscSymbolSvg } from '@static/images/Sort_Asc.svg';

import styled from 'styled-components';

const SortAscSymbol = styled(SortAscSymbolSvg)`
  margin: 0;
  width: 2em;

  path {
    fill: var(--color-gray500);
  }

  path:hover {
    fill: var(--color-secondary);
  }
`;

export default SortAscSymbol;
