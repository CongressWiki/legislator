import React from 'react';
import ViewportMask from '@components/atoms/ViewportMask';
import SearchBox from '@components/molecules/SearchBox';

export type SearchMaskProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onEnterKeyPress: EventListener;
  onClickOutside: EventListener;
  onEscapeKeyPress: EventListener;
  value?: string;
};

const SearchMask = ({
  value = '',
  onChange,
  onEnterKeyPress,
  onClickOutside,
  onEscapeKeyPress,
}: SearchMaskProps) => {
  return (
    <ViewportMask
      onClickOutside={onClickOutside}
      onEscapeKeyPress={onEscapeKeyPress}
      onEnterKeyPress={onEnterKeyPress}
    >
      <SearchBox value={value} onChange={onChange} />
    </ViewportMask>
  );
};

export default SearchMask;
