import React from 'react';
import LoginIcon from '@components/icons/Login';
import styled from 'styled-components';
import ButtonCanvas from '@components/ButtonCanvas';

import Avatar from '@components/Avatar';

export type LoginButtonProps = {
  className?: string;
};

const LoginButton = ({ className }: LoginButtonProps) => {
  return (
    <StyledButtonCanvas className={className} onClick={() => {}}>
      <Avatar party="">
        {/* <img src={user.picture} alt="User profile image" /> */}
      </Avatar>
    </StyledButtonCanvas>
  );

  // return (
  //   <StyledButtonCanvas className={className} onClick={() => {}}>
  //     <LoginIcon />
  //   </StyledButtonCanvas>
  // );
};

const StyledButtonCanvas = styled(ButtonCanvas)`
  height: 4rem;
  width: 4rem;
`;

export default LoginButton;
