import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import BillCard, { BillCardProps } from '@components/BillCard';
import BillLane from '@components/BillLane';

import BillFeedLayout, { BillFeedLayoutProps } from './index';

export default {
  title: 'Components/Layouts/BillFeed',
  component: BillFeedLayout,
} as Meta;

const BillProps: BillCardProps = {
  id: 'hr-2154',
  number: '2154',
  title:
    'To direct the Secretary of the Interior, acting through the Bureau of Land Management and the Bureau of Reclamation, to convey, by quitclaim deed, to the City of Fernley, Nevada, all right, title, and interest of the United States, to any Federal land within that city that is under the jurisdiction of either of those agencies.',
  subject: 'Racial Justice',
  type: 'hr',
  updated_at: '2020-09-30T05:52:20+00:00',
};

const FeaturedBillLane = styled(BillLane)`
  justify-self: center;
  grid-template-columns: 1fr;

  background-color: var(--color-background);

  border: 0;
  border-top: none;
  border-radius: 0;
  border-left: solid thin var(--color-gray300);
  border-right: solid thin var(--color-gray300);
`;

const Template: Story<BillFeedLayoutProps> = (args) => (
  <BillFeedLayout>
    <FeaturedBillLane>
      <BillCard {...BillProps} />
      <BillCard {...BillProps} />
      <BillCard {...BillProps} />
      <BillCard {...BillProps} />
      <BillCard {...BillProps} />
      <BillCard {...BillProps} />
    </FeaturedBillLane>
  </BillFeedLayout>
);

export const Default = Template.bind({});
