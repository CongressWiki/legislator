import React from 'react';
import styled from 'styled-components';

export type AvatarProps = {
  children: React.ReactNode;
  party: string;
  className?: string;
};

const PARTY_COLORS = {
  Democrat: 'blue',
  Republican: 'red',
  Independent: 'green',
};

const Avatar = ({ children, className, party }: AvatarProps) => {
  return (
    <Wrapper
      className={className}
      borderColor={party in PARTY_COLORS ? PARTY_COLORS[party] : 'gray'}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ borderColor: string }>`
  z-index: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /**
   * Make sure that the picture is at least 48px^2.
   * Remember border size will cut into the picture's size
   * To handle this: multiply border-size by 2 then add to width & height.
   */
  width: 50px;
  height: 50px;
  line-height: 1px;
  border-radius: 50%;
  overflow: hidden;

  border: solid 1px ${(props) => props.borderColor};

  > * {
    z-index: 400;
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
    color: transparent;
    text-indent: 10000;
    overflow: hidden;
  }
`;

export default Avatar;