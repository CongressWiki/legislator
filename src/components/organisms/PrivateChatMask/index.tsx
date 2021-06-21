import React from 'react';
import ViewportMask from '@components/atoms/ViewportMask';
import PrivateChatBox from '@components/molecules/PrivateChatBox';
import { User } from '@type/hasura';

export type PrivateChatMaskProps = {
  onEnterKeyPress?: EventListener;
  onClickOutside?: EventListener;
  onEscapeKeyPress?: EventListener;
  userProfile: User;
};

const PrivateChatMask = ({
  onEnterKeyPress,
  onClickOutside,
  onEscapeKeyPress,
  userProfile,
}: PrivateChatMaskProps) => {
  return (
    <ViewportMask
      onClickOutside={onClickOutside}
      onEscapeKeyPress={onEscapeKeyPress}
      onEnterKeyPress={onEnterKeyPress}
    >
      <PrivateChatBox userProfile={userProfile} />
    </ViewportMask>
  );
};

export default PrivateChatMask;
