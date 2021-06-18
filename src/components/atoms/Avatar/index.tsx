import React from 'react';
import styled from 'styled-components';
import { getPartyColors } from '@constants';
import { motion } from 'framer-motion';

export type AvatarProps = {
  children: React.ReactNode;
  party: string;
  size?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Avatar = ({ children, party, size, className }: AvatarProps) => {
  const partyColor = getPartyColors(party);
  return (
    // @ts-expect-error styled-components is bugged and requires the className
    <Wrapper className={className} partyColor={partyColor} size={size}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)<{ partyColor?: string; size?: string }>`
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /**
   * Make sure that the picture is at least 48px^2.
   * Remember border size will cut into the picture's size
   * To handle this: multiply border-size by 2 then add to width & height.
   */
  width: ${(properties) => properties.size ?? '50px'};
  height: ${(properties) => properties.size ?? '50px'};

  /* Not supported by non-chrome browsers */
  /* aspect-ratio: 1 / 1; */

  overflow: hidden;
  border-radius: 50%;

  border: solid 1px ${(properties) => properties.partyColor};
  background-color: ${(properties) => properties.partyColor};

  img {
    z-index: 1;
    display: block;
    object-fit: cover;
  }
`;

export default Avatar;
