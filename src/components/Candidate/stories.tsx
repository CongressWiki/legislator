import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import Candidate from './index';

export default {
  title: 'Components/Candidate',
  component: Candidate,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <Candidate {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
