import { ReactComponent as UsaMapSVG } from '@static/images/USA_Map.svg';
import styled from 'styled-components';

const UsaMap = styled(UsaMapSVG)`
  padding-top: 42px;
  margin: 0;
  transition: fill 1s;
  width: none;
  height: none;

  path {
    fill: red;
  }

  path:hover {
    fill: blue;
  }
`;

export default UsaMap;
