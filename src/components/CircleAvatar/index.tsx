import React from 'react';

import Image, { ImageProps } from '@components/Image';
import Avatar from '@components/Avatar';
import type { OfficialWithImage } from '@type/hasura';

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
  backgroundColor = 'var(--color-gray700)',
  className,
}: CircleAvatarProps) => {
  return (
    <Avatar party={political_party} size={size} className={className}>
      <Image
        imageData={image}
        alt={preferred_name}
        loading={loading}
        backgroundColor={backgroundColor}
      />
    </Avatar>
  );
};

export default CircleAvatar;
