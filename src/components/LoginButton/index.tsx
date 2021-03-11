import React from 'react';
import LoginIcon from '@components/icons/Login';
import styled from 'styled-components';
import ButtonCanvas from '@components/ButtonCanvas';
import auth from '@utils/Auth0';
import Avatar from '@components/Avatar';

export type LoginButtonProps = {
  className?: string;
};

const LoginButton = ({ className }: LoginButtonProps) => {
  const isAuthenticated = auth.isAuthenticated();

  if (isAuthenticated) {
    const user = auth.getUser();

    return (
      <StyledButtonCanvas
        className={className}
        onClick={() => {
          auth.logout();
        }}
      >
        <Avatar party="">
          {/* <img src={user.picture} alt="User profile image" /> */}
        </Avatar>
      </StyledButtonCanvas>
    );
  }

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
