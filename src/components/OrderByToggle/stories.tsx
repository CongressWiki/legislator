import React from 'react';
import {Story, Meta} from '@storybook/react';
import styled from 'styled-components';

import OrderByToggle, {OrderByToggleProps} from './index';

export default {
  title: 'Components/OrderByToggle',
  component: OrderByToggle
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story<OrderByToggleProps> = (args) => (
  <ExampleContainer>
    <OrderByToggle {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {
  handleToggle: (isAscending) => {
    console.log({isAscending});
  }
};