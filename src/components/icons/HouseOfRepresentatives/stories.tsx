import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import HouseOfRepresentativesIcon from './index';

export default {
  title: 'Components/HouseOfRepresentativesIcon',
  component: HouseOfRepresentativesIcon,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (args) => (
  <ExampleContainer>
    <HouseOfRepresentativesIcon {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
