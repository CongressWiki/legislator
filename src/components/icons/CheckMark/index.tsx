import { ReactComponent as CheckMarkSvg } from '@static/images/Check_Mark.svg';
import styled from 'styled-components';

const CheckMarkIcon = styled(CheckMarkSvg)`
  margin: 0;
  /* width: 2rem; */

  path {
    fill: green;
  }
`;

export default CheckMarkIcon;
