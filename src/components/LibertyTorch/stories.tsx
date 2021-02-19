import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import LibertyTorch from './index';

export default {
  title: 'Components/LibertyTorch',
  component: LibertyTorch,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <LibertyTorch {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
