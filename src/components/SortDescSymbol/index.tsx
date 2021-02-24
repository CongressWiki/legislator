import { ReactComponent as SortDescSymbolSvg } from '@static/images/Sort_Desc.svg';
import styled from 'styled-components';

const SortDescSymbol = styled(SortDescSymbolSvg)`
  margin: 0;
  width: 2em;

  path {
    fill: var(--color-gray500);
  }

  path:hover {
    fill: var(--color-secondary);
  }
`;

export default SortDescSymbol;
