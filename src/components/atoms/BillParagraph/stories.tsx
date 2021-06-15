import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillParagraph from './index';

export default {
  title: 'components/atoms/BillParagraph',
  component: BillParagraph,
} as Meta;

const Template: Story = (arguments_) => (
  <BillParagraph>{arguments_.text}</BillParagraph>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Directs the Secretary of the Interior, if the Secretary receives an offer from the city of Fernley, Nevada, to purchase identified federal land within the city, through the Bureau of Land Management (BLM) and the Bureau of Reclamation, to convey to the city all interest of the United States in such land in exchange for consideration in an amount equal to the fair market value of the land.\n\nPermits the city and the Bureau of Reclamation to retain easements or rights-of-way on the federal land to be conveyed, including easements or rights-of-way that are necessary to carry out the operation and maintenance of the Truckee Canal or the Newlands Project.\n\nRequires the city to pay or reimburse the Secretary, as appropriate, for reasonable transaction and administrative personnel costs associated with such conveyance.\n\nDeclares that any conveyances under this Act shall not be considered a major federal action for purposes of an environmental impact statement required by the National Environmental Policy Act of 1969 (NEPA).\n\nReleases the United States from all liabilities or claims of any kind or nature arising from the presence, release, or threat of release of any hazardous substance, pollutant, contaminant, petroleum product (or derivative of a petroleum product), solid waste, mine materials, or mining related features existing on the federal land.\n\nWithdraws the federal land from: (1) entry, appropriation, or disposal under the public land laws; (2) location, entry, and patent under the mining laws; and (3) disposition under the mineral leasing, mineral materials, and geothermal leasing laws.',
};
