import React from 'react';
import styled from 'styled-components';
import Image from '@components/Image';
import Avatar from '@components/Avatar';

export type CircleAvatarProps = {
  name: string;
  party: string;
  imageData?: any;
  size?: string;
  className?: string;
};

const CircleAvatar = ({
  name,
  party,
  imageData,
  size,
  className,
}: CircleAvatarProps) => {
  return (
    <Wrapper party={party} size={size} className={className}>
      <Image imageData={imageData} alt={name} />
    </Wrapper>
  );
};

const Wrapper = styled(Avatar)``;

export default CircleAvatar;
