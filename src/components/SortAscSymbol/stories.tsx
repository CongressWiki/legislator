import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import SortAscSymbol from './index';

export default {
  title: 'Components/SortAscSymbol',
  component: SortAscSymbol,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <SortAscSymbol {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
