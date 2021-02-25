import React from 'react';
import {Story, Meta} from '@storybook/react';
import styled from 'styled-components';

import UsaCountsLogo from './index';

export default {
  title: 'Components/UsaCountsLogo',
  component: UsaCountsLogo
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <UsaCountsLogo {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
