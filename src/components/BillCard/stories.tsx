import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillCard, { BillCardProps } from './index';

export default {
  title: 'Components/BillCard',
  component: BillCard,
} as Meta;

const Template: Story<BillCardProps> = (args) => <BillCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'hr1170-113',
  number: '1170',
  title:
    'To direct the Secretary of the Interior, acting through the Bureau of Land Management and the Bureau of Reclamation, to convey, by quitclaim deed, to the City of Fernley, Nevada, all right, title, and interest of the United States, to any Federal land within that city that is under the jurisdiction of either of those agencies.',
  subject: 'Public lands and natural resources',
  sponsor: 'A000369',
  type: 'hr',
  updated_at: '2021-02-01T22:36:36+00:00',
};
