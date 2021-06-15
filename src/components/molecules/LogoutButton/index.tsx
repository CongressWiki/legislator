import React from 'react';
import styled from 'styled-components';
import ButtonCanvas from '@components/atoms/ButtonCanvas';

import Avatar from '@components/atoms/Avatar';

export type LogoutButtonProps = {
  className?: string;
};

const LogoutButton = ({ className }: LogoutButtonProps) => {
  return (
    <StyledButtonCanvas className={className} onClick={() => {}}>
      {/* <LogoutIcon /> */}
    </StyledButtonCanvas>
  );
};

const StyledButtonCanvas = styled(ButtonCanvas)`
  height: 4rem;
  width: 4rem;
`;

export default LogoutButton;
