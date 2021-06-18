import React from 'react';
import ViewportMask from '@components/atoms/ViewportMask';
import PrivateChatBox from '@components/molecules/PrivateChatBox';

export type PrivateChatMaskProps = {
  onEnterKeyPress?: EventListener;
  onClickOutside?: EventListener;
  onEscapeKeyPress?: EventListener;
};

const PrivateChatMask = ({
  onEnterKeyPress,
  onClickOutside,
  onEscapeKeyPress,
}: PrivateChatMaskProps) => {
  return (
    <ViewportMask
      onClickOutside={onClickOutside}
      onEscapeKeyPress={onEscapeKeyPress}
      onEnterKeyPress={onEnterKeyPress}
    >
      <PrivateChatBox />
    </ViewportMask>
  );
};

export default PrivateChatMask;
