import USStates from '../images/us-states.svg';
import styled from 'styled-components';

const USStatesSVG = styled(USStates)`
  padding-top: 42px;
  margin: 0;
  transition: fill 1s;

  path {
    fill: red;
  }

  path:hover {
    fill: blue;
  }
`;

export default USStatesSVG;
