import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import SubjectIcon, { SubjectIconProps } from './index';

export default {
  title: 'Components/Icons/SubjectIcon',
  component: SubjectIcon,
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story<SubjectIconProps> = ({ ...args }) => (
  <ExampleContainer>
    <SubjectIcon {...args} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Health',
};
