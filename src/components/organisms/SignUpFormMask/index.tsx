import React from 'react';
import ViewportMask from '@components/atoms/ViewportMask';
import SignUpForm from '@components/molecules/SignUpForm';
import { User } from '@type/hasura';

export type SignUpFormMaskProps = {
  onEnterKeyPress?: EventListener;
  onClickOutside?: EventListener;
  onEscapeKeyPress?: EventListener;
  userProfile: User;
  setUserProfile: () => void;
};

const SignUpFormMask = ({
  onEnterKeyPress,
  onClickOutside,
  onEscapeKeyPress,
  userProfile,
  setUserProfile,
}: SignUpFormMaskProps) => {
  return (
    <ViewportMask
      onClickOutside={onClickOutside}
      onEscapeKeyPress={onEscapeKeyPress}
      onEnterKeyPress={onEnterKeyPress}
    >
      <SignUpForm userProfile={userProfile} setUserProfile={setUserProfile} />
    </ViewportMask>
  );
};

export default SignUpFormMask;
