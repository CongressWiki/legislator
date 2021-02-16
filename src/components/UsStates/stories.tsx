import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import USStates from './index';

export default {
  title: 'Components/UsStates',
  component: USStates,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <USStates {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
