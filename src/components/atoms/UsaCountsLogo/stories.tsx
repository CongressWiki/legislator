import React from 'react';
import { Story, Meta } from '@storybook/react';

import UsaCountsLogo from './index';

export default {
  title: 'components/atoms/UsaCountsLogo',
  component: UsaCountsLogo,
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        {story()}
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <UsaCountsLogo {...args} />;

export const Default = Template.bind({});
Default.args = {};
