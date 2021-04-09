import React from 'react';
import { Story, Meta } from '@storybook/react';

import SearchInput, {
  SearchInputProps as SearchInputProperties,
} from './index';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

const Template: Story<SearchInputProperties> = (arguments_) => (
  <SearchInput {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  handleInput: (value: string) => {
    console.log(value);
  },
  className: '',
};
