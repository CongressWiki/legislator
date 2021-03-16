import { ReactComponent as HouseOfRepresentativesSvg } from '@static/images/Assembly_House_Of_Representatives.svg';
import styled from 'styled-components';

const HouseOfRepresentativesIcon = styled(HouseOfRepresentativesSvg)`
  margin: 0;
  padding: 0;

  path {
    fill: green;
  }

  circle {
    fill: green;
  }
`;

export default HouseOfRepresentativesIcon;
