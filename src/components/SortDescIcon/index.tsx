import { ReactComponent as SortDescIconSvg } from '@static/images/Sort_Desc.svg';
import styled from 'styled-components';

const SortDescIcon = styled(SortDescIconSvg)`
  margin: 0;
  width: 2em;

  path {
    fill: var(--color-gray500);
  }
`;

export default SortDescIcon;
