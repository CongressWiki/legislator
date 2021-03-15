import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import UsaMap from './index';

export default {
  title: 'Components/Icons/UsaMap',
  component: UsaMap,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <UsaMap {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
