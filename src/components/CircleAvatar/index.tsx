import React from 'react';
import styled from 'styled-components';
import Image, { ImageProps } from '@components/Image';
import Avatar from '@components/Avatar';

export type CircleAvatarProps = {
  name: string;
  party: string;
  imageData?: any;
  size?: string;
  className?: string;
} & Pick<ImageProps, 'loading' | 'backgroundColor'>;

const CircleAvatar = ({
  name,
  party,
  imageData,
  size,
  loading,
  backgroundColor = 'var(--color-gray700)',
  className,
}: CircleAvatarProps) => {
  return (
    <Wrapper party={party} size={size} className={className}>
      <Image
        imageData={imageData}
        alt={name}
        loading={loading}
        backgroundColor={backgroundColor}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Avatar)``;

export default CircleAvatar;
