import {ReactComponent as CountrySVG} from '@static/images/Country.svg';
import styled from 'styled-components';

const Country = styled(CountrySVG)`
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

export default Country;
