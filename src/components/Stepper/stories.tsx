import React from 'react';
import { Story, Meta } from '@storybook/react';

import Stepper, { VerticalLinearStepperProps } from './index';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as Meta;

const Template: Story<VerticalLinearStepperProps> = (args) => (
  <Stepper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  steps: [
    'Introduced in House',

    'The House Committee on Rules reported an original measure, H. Rept. 111-439, by Ms. Pingree (ME).',

    'All points of order against consideration of the bill are waived except those arising under clause 9 or 10 of rule XXI. The amendment in the nature of a substitute printed in part A of House Report 111-439 shall be considered as adopted.',

    'Placed on the House Calendar, Calendar No. 172.',

    'Considered as privileged matter.',

    'DEBATE - The House proceeded with one hour of debate on H. Res. 1168.',

    'The previous question was ordered without objection.',

    'On agreeing to the resolution Agreed to by voice vote.',

    'Motion to reconsider laid on the table Agreed to without objection.',
  ],
};

export const EighteenSteps = Template.bind({});
EighteenSteps.args = {
  steps: [
    'Introduced in House',

    "Referred to the House Committee on Veterans' Affairs.",

    'Referred to the Subcommittee on Economic Opportunity.',

    'Subcommittee Hearings Held.',

    'Subcommittee Consideration and Mark-up Session Held.',

    'Forwarded by Subcommittee to Full Committee (Amended) by Voice Vote .',

    'Committee Consideration and Mark-up Session Held.',

    'Ordered to be Reported (Amended) by Voice Vote.',

    "Reported (Amended) by the Committee on Veterans' Affairs. H. Rept. 111-323.",

    'Placed on the Union Calendar, Calendar No. 185.',

    'Mr. Walz moved to suspend the rules and pass the bill, as amended.',

    'Considered under suspension of the rules.',

    'DEBATE - The House proceeded with forty minutes of debate on H.R. 1168.',

    'At the conclusion of debate, the Yeas and Nays were demanded and ordered. Pursuant to the provisions of clause 8, rule XX, the Chair announced that further proceedings on the motion would be postponed.',

    'Considered as unfinished business.',

    'On motion to suspend the rules and pass the bill, as amended Agreed to by the Yeas and Nays: (2/3 required): 356 - 0 (Roll no. 832).',

    'Motion to reconsider laid on the table Agreed to without objection.',

    "Received in the Senate and Read twice and referred to the Committee on Veterans' Affairs.",
  ],
};
