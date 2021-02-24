import React from 'react';
import { Story, Meta } from '@storybook/react';

import SearchInput, { SearchInputProps } from './index';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleInput: (value: string) => console.log(value),
  className: '',
};
