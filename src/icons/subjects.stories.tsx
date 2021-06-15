import React from 'react';
import { Story, Meta } from '@storybook/react';
import * as SubjectIcons from './subjects';
import Image, { ImageProps } from '@components/atoms/Image';

export default {
  component: Image,
  title: 'icons/subjects',
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;
