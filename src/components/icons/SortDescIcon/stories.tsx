import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import SortDescIcon from './index';

export default {
  title: 'Components/Icons/SortDescIcon',
  component: SortDescIcon,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <SortDescIcon {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
