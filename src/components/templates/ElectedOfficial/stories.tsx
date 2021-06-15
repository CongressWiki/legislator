import React from 'react';
import { Story, Meta } from '@storybook/react';
import props from '@samples/elected-official-props.json';
import ElectedOfficialTemplate, { ElectedOfficialTemplateProps } from './index';

export default {
  title: 'templates/ElectedOfficial',
  component: ElectedOfficialTemplate,
} as Meta;

const Template: Story<ElectedOfficialTemplateProps> = (args) => (
  <ElectedOfficialTemplate {...args} />
);

export const dorisMatsui = Template.bind({});
dorisMatsui.args = props as any;
