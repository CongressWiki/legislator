import React from 'react';
import styled from 'styled-components';
import { getPartyColors } from '@constants';

export type AvatarProps = {
  children: React.ReactNode;
  party: string;
  size?: string;
  className?: string;
};

const Avatar = ({ children, party, size, className }: AvatarProps) => {
  const partyColor = getPartyColors(party);
  return (
    <Wrapper className={className} partyColor={partyColor} size={size}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ partyColor?: string; size?: string }>`
  z-index: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /**
   * Make sure that the picture is at least 48px^2.
   * Remember border size will cut into the picture's size
   * To handle this: multiply border-size by 2 then add to width & height.
   */
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};

  /* Not supported by non-chrome browsers */
  /* aspect-ratio: 1 / 1; */

  overflow: hidden;
  border-radius: 50%;

  border: solid 1px ${(props) => props.partyColor};
  background-color: ${(props) => props.partyColor};

  img {
    z-index: 400;
  }
`;

export default Avatar;
