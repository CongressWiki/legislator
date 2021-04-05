import React from 'react';
import styled from 'styled-components';
import Image, { ImageProps } from '@components/Image';
import Avatar from '@components/Avatar';
import type { OfficialWithImage } from '@type/hasura';
import { getPartyColors } from '@constants';

export type CircleAvatarProps = {
  size?: string;
  className?: string;
} & Pick<OfficialWithImage, 'preferred_name' | 'political_party' | 'image'> &
  Pick<ImageProps, 'loading' | 'backgroundColor'>;

const CircleAvatar = ({
  preferred_name,
  political_party,
  image,
  size,
  loading = 'lazy',
  className,
}: CircleAvatarProps) => {
  return (
    <StyledAvatar party={political_party} size={size} className={className}>
      <Image
        imageData={image}
        alt={preferred_name}
        loading={loading}
        className="image"
      />
    </StyledAvatar>
  );
};

export default CircleAvatar;

const StyledAvatar = styled(Avatar)`
  .image {
    width: 100%;
    height: auto;
  }
`;
