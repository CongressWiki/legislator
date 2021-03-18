import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import Calendar from './index';

export default {
  title: 'Components/Icons/Calendar',
  component: Calendar,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <Calendar {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
