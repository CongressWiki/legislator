import React from 'react';
import LoginIcon from '@components/icons/Login';
import styled from 'styled-components';
import ButtonCanvas from '@components/ButtonCanvas';
import auth from '@utils/Auth0';

export type LoginButtonProps = {
  className?: string;
};

const LoginButton = ({ className }: LoginButtonProps) => {
  return (
    <StyledButtonCanvas
      className={className}
      onClick={() => {
        auth.login();
      }}
    >
      <LoginIcon />
    </StyledButtonCanvas>
  );
};

const StyledButtonCanvas = styled(ButtonCanvas)`
  height: 4rem;
  width: 4rem;
`;

export default LoginButton;
