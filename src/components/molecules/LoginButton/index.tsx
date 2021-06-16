import React from 'react';
import LoginIcon from '@components/atoms/Login';
import ButtonCanvas from '@components/atoms/ButtonCanvas';
import { useAuth0 } from '@auth0/auth0-react';
import Avatar from '@components/atoms/Avatar';

export type LoginButtonProps = {
  className?: string;
};

const LoginButton = ({ className }: LoginButtonProps) => {
  const { user, loginWithPopup, isAuthenticated, logout } = useAuth0();

  if (isAuthenticated && user?.picture) {
    return (
      <ButtonCanvas
        className={className}
        onClick={() => {
          logout();
        }}
      >
        <Avatar party="">
          <img src={user.picture} alt="User profile image" />
        </Avatar>
      </ButtonCanvas>
    );
  }

  return (
    <ButtonCanvas
      className={className}
      onClick={async () => {
        await loginWithPopup();
      }}
    >
      <LoginIcon />
    </ButtonCanvas>
  );
};

export default LoginButton;
