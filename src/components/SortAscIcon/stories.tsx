import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import SortAscIcon from './index';

export default {
  title: 'Components/SortAscIcon',
  component: SortAscIcon,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <SortAscIcon {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
