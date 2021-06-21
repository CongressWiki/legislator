import React from 'react';

import Image, { ImageProps } from '@components/atoms/Image';
import Avatar from '@components/atoms/Avatar';
import type { OfficialWithImage } from '@type/hasura';
import type { PartialPick } from '@type/utility';

export type CircleAvatarProps = {
  size?: string;
  className?: string;
} & PartialPick<
  OfficialWithImage,
  'preferred_name' | 'political_party' | 'image'
> &
  PartialPick<ImageProps, 'loading' | 'backgroundColor'>;

const CircleAvatar = ({
  preferred_name,
  political_party,
  image,
  size,
  loading = 'lazy',
  className,
}: CircleAvatarProps) => {
  return (
    <Avatar party={political_party} size={size} className={className}>
      <Image
        imageData={image}
        alt={preferred_name ?? 'Avatar image'}
        loading={loading}
      />
    </Avatar>
  );
};

export default CircleAvatar;
