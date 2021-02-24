import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import SortDescSymbol from './index';

export default {
  title: 'Components/SortDescSymbol',
  component: SortDescSymbol,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <SortDescSymbol {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
