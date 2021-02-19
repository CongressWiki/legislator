import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import HomeLayout, { HomeLayoutProps } from './index';

export default {
  title: 'Components/Layouts/Home',
  component: HomeLayout,
} as Meta;

const ExampleBox = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Template: Story<HomeLayoutProps> = (args) => (
  <HomeLayout>
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
    <ExampleBox backgroundColor="orange" />
  </HomeLayout>
);

export const Default = Template.bind({});
