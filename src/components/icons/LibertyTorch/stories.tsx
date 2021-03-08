import React from 'react';
import {Story, Meta} from '@storybook/react';
import styled from 'styled-components';

import LibertyTorchIcon from './index';

export default {
  title: 'Components/LibertyTorchIcon',
  component: LibertyTorchIcon
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <LibertyTorchIcon {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
