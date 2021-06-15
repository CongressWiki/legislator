import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import Login from './index';

export default {
  title: 'components/atoms/Login',
  component: Login,
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {story()}
      </div>
    ),
  ],
} as Meta;

const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story = (arguments_) => (
  <ExampleContainer>
    <Login {...arguments_} />
  </ExampleContainer>
);

export const Default = Template.bind({});
Default.args = {};
