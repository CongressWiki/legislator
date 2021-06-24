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

  /* box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12); */

  img {
    z-index: 1;
    display: block;
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

export default Avatar;
