import React from 'react';
import { Story, Meta } from '@storybook/react';

import StateIcon, { StateIconProps } from './index';

export default {
  title: 'components/atoms/StateIcon',
  component: StateIcon,
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {story()}
      </div>
    ),
  ],
} as Meta;

const Template: Story<StateIconProps> = (arguments_) => (
  <StateIcon {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  state: 'MN',
  className: '',
};
