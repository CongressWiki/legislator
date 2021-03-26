import React from 'react';
import styled from 'styled-components';
import ButtonCanvas from '@components/ButtonCanvas';

import Avatar from '@components/Avatar';

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
