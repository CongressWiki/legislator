import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import CommonLayout, { CommonLayoutProps } from './index';

export default {
  title: 'Components/Layouts/Common',
  component: CommonLayout,
} as Meta;

const ExampleBox = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 100px;
  text-align: center;
`;

const Template: Story<CommonLayoutProps> = (args) => (
  <CommonLayout>
    <ExampleBox backgroundColor="lightBlue">
      <p>*Default*</p>
    </ExampleBox>
    <ExampleBox className="left-side" backgroundColor="orange">
      <p>.left-side</p>
    </ExampleBox>
    <ExampleBox className="right-side" backgroundColor="lightGreen">
      <p>.right-side</p>
    </ExampleBox>
    <ExampleBox className="full-bleed" backgroundColor="red">
      <p>.full-bleed</p>
    </ExampleBox>
  </CommonLayout>
);

export const Default = Template.bind({});
