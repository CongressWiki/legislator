import React from 'react';
import styled from 'styled-components';
import { getPartyColors } from '@constants';
import { motion } from 'framer-motion';

export type AvatarProps = {
  children: React.ReactNode;
  party: string;
  size?: string;
  whileHover?: Record<string, any>;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Avatar = ({
  children,
  party,
  size,
  whileHover,
  className,
}: AvatarProps) => {
  const partyColor = getPartyColors(party);
  return (
    <Wrapper
      className={className}
      partyColor={partyColor}
      size={size}
      whileHover={whileHover}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)<{ partyColor?: string; size?: string }>`
  z-index: 2;
  position: relative;

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

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 80%;

  background-color: ${(properties) => properties.partyColor};

  img {
    z-index: 1;

    width: 100%;
    height: 100%;

    display: block;
    object-fit: cover;
  }
`;

export default Avatar;
