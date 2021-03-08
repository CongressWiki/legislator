import { ReactComponent as LoginSvg } from '@static/images/Login.svg';
import styled from 'styled-components';

const LoginIcon = styled(LoginSvg)`
  margin: 0;
  width: 2rem;

  path {
    stroke: var(--color-gray500);
  }
`;

export default LoginIcon;
