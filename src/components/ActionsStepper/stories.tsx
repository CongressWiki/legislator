import React from 'react';
import { Story, Meta } from '@storybook/react';

import ActionsStepper, {
  ActionsStepperProps as ActionsStepperProperties,
} from './index';

export default {
  title: 'Components/ActionsStepper',
  component: ActionsStepper,
} as Meta;

const Template: Story<ActionsStepperProperties> = (arguments_) => (
  <ActionsStepper {...arguments_} />
);

export const Default = Template.bind({});
// Args from 117-HR1
Default.args = {
  actions: [
    {
      id: 'hr1-117-17',
      text: 'DEBATE - The House proceeded with one hour of debate on H.R. 1.',
      acted_at: '2021-03-02T14:16:25+00:00',
    },
    {
      id: 'hr1-117-16',
      text:
        'Rule provides for consideration of H.R. 1 and H.R. 1280. Rule provides for 1 hour of general debate on H.R. 1 and one motion to recommit. Rule provides for 1 hour of general debate on H.R. 1280 and one motion to recommit.',
      acted_at: '2021-03-02T14:14:41+00:00',
    },
    {
      id: 'hr1-117-13',
      text:
        'Referred to the Subcommittee on Courts, Intellectual Property, and the Internet.',
      acted_at: '2021-03-01T00:00:00+00:00',
    },
    {
      id: 'hr1-117-18',
      text:
        'DEBATE - Pursuant to the provisions of H.Res. 179, the House proceeded with 20 minutes of debate on the Lofgren amendment en bloc No. 1.',
      acted_at: '2021-03-02T16:06:52+00:00',
    },
    {
      id: 'hr1-117-19',
      text:
        'POSTPONED PROCEEDINGS - At the conclusion of debate on the Lofgren amendment en bloc No. 1, the Chair put the question on agreeing to the amendment and by voice vote, announced that the noes had prevailed. Ms. Lofgren demanded the yeas and nays and the Chair postponed further proceedings until a time to be announced.',
      acted_at: '2021-03-02T16:25:51+00:00',
    },
    {
      id: 'hr1-117-20',
      text:
        'DEBATE - Pursuant to the provisions of H.Res. 179, the House proceeded with 20 minutes of debate on the Lofgren amendment en bloc No. 2.',
      acted_at: '2021-03-02T16:28:26+00:00',
    },
    {
      id: 'hr1-117-21',
      text:
        'DEBATE - Pursuant to the provisions of H.Res. 179, the House proceeded with 10 minutes of debate on the Bush amendment No. 14.',
      acted_at: '2021-03-02T16:40:12+00:00',
    },
    {
      id: 'hr1-117-15',
      text: 'Considered under the provisions of rule H. Res. 179.',
      acted_at: '2021-03-02T14:14:36+00:00',
    },
    {
      id: 'hr1-117-22',
      text:
        'POSTPONED PROCEEDINGS - At the conclusion of debate on the Bush amendment No. 14, the Chair put the question on the agreeing to the amendment and by voice vote, announced that the ayes had prevailed. Mrs. Green(GA) demanded yeas and nays and the Chair postponed further proceedings until a time to be announced.',
      acted_at: '2021-03-02T16:53:35+00:00',
    },
    {
      id: 'hr1-117-23',
      text:
        'DEBATE - Pursuant to the provisions of H.Res. 179, the House proceeded with 10 minutes of debate on the Rodney Davis (IL) amendment No. 19.',
      acted_at: '2021-03-02T18:33:42+00:00',
    },
    {
      id: 'hr1-117-24',
      text:
        'POSTPONED PROCEEDINGS - At the conclusion of debate on the Rodney Davis (IL) amendment No. 19, the Chair put the question on the agreeing to the amendment and by voice vote, announced that the nays had prevailed. Ms. Lofgren demanded yeas and nays and the Chair postponed further proceedings until a time to be announced.',
      acted_at: '2021-03-02T18:42:16+00:00',
    },
    {
      id: 'hr1-117-25',
      text:
        'DEBATE - Pursuant to the provisions of H.Res. 179, the House proceeded with 20 minutes of debate on the Lofgren amendment en bloc No. 3.',
      acted_at: '2021-03-02T18:43:23+00:00',
    },
    {
      id: 'hr1-117-26',
      text:
        'POSTPONED PROCEEDINGS - At the conclusion of debate on the Lofgren amendment en bloc No. 3, the Chair put the question on agreeing to the amendment and by voice vote, announced that the noes had prevailed. Ms. Lofgren demanded the yeas and nays and the Chair postponed further proceedings until a time to be announced.',
      acted_at: '2021-03-02T19:10:27+00:00',
    },
    {
      id: 'hr1-117-27',
      text:
        'Pursuant to clause 1(c) of Rule XIX, further consideration of H.R. 1 is postponed.',
      acted_at: '2021-03-02T19:10:28+00:00',
    },
    {
      id: 'hr1-117-1',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-14',
      text:
        'Rules Committee Resolution H. Res. 179 Reported to House. Rule provides for consideration of H.R. 1 and H.R. 1280. Rule provides for 1 hour of general debate on H.R. 1 and one motion to recommit. Rule provides for 1 hour of general debate on H.R. 1280 and one motion to recommit.',
      acted_at: '2021-03-02T00:09:16+00:00',
    },
    {
      id: 'hr1-117-28',
      text: 'Considered as unfinished business.',
      acted_at: '2021-03-02T23:00:12+00:00',
    },
    {
      id: 'hr1-117-30',
      text:
        'Motion to reconsider laid on the table. Agreed to without objection.',
      acted_at: '2021-03-02T23:53:20+00:00',
    },
    {
      id: 'hr1-117-31',
      text:
        'Motion to reconsider laid on the table. Agreed to without objection.',
      acted_at: '2021-03-03T00:37:06+00:00',
    },
    {
      id: 'hr1-117-32',
      text:
        'Pursuant to clause 1(c) of Rule XIX, further consideration of H.R. 1 is postponed.',
      acted_at: '2021-03-03T00:37:11+00:00',
    },
    {
      id: 'hr1-117-7',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-8',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-9',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-10',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-11',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-0',
      text: 'Introduced in House',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-5',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-4',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-6',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-3',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-35',
      text:
        'DEBATE - Pursuant to the provisions of H. Res. 179, the House proceeded with 10 minutes of debate on the Lesko amendment No. 28.',
      acted_at: '2021-03-03T15:37:15+00:00',
    },
    {
      id: 'hr1-117-36',
      text:
        'Motion to reconsider laid on the table. Agreed to without objection.',
      acted_at: '2021-03-03T15:48:51+00:00',
    },
    {
      id: 'hr1-117-29',
      text:
        'UNFINISHED BUSINESS - The Chair announced that the unfinished business was the question on agreeing to the amendments which had been debated earlier and on which further proceedings had been postponed.',
      acted_at: '2021-03-02T23:00:26+00:00',
    },
    {
      id: 'hr1-117-33',
      text:
        'Pursuant to clause 1(c) of Rule XIX, the House resumed consideration of H.R. 1.',
      acted_at: '2021-03-03T15:35:31+00:00',
    },
    {
      id: 'hr1-117-34',
      text: 'Considered as unfinished business.',
      acted_at: '2021-03-03T15:35:33+00:00',
    },
    {
      id: 'hr1-117-37',
      text:
        'DEBATE - Pursuant to the provisions of H. Res. 179, the House proceeded with 10 minutes of debate on the Pressley amendment No. 37.',
      acted_at: '2021-03-03T15:49:46+00:00',
    },
    {
      id: 'hr1-117-39',
      text:
        'DEBATE - Pursuant to the provisions of H. Res. 179, the House proceeded with 20 minutes of debate on the Lofgren amendment en bloc No. 4.',
      acted_at: '2021-03-03T16:06:56+00:00',
    },
    {
      id: 'hr1-117-43',
      text: 'Considered as unfinished business.',
      acted_at: '2021-03-03T17:16:22+00:00',
    },
    {
      id: 'hr1-117-44',
      text: 'The previous question was ordered pursuant to the rule.',
      acted_at: '2021-03-03T18:52:11+00:00',
    },
    {
      id: 'hr1-117-45',
      text:
        'POSTPONED PROCEEDINGS - Pursuant to clause 1(c) of Rule 19, further consideration of H.R. 1 was postponed.',
      acted_at: '2021-03-03T18:52:55+00:00',
    },
    {
      id: 'hr1-117-46',
      text:
        'Pursuant to clause 1(c) of Rule XIX, the House resumed with further consideration of H.R. 1.',
      acted_at: '2021-03-03T23:15:46+00:00',
    },
    {
      id: 'hr1-117-47',
      text: 'Considered as unfinished business.',
      acted_at: '2021-03-03T23:15:48+00:00',
    },
    {
      id: 'hr1-117-48',
      text:
        'Mr. Davis, Rodney moved to recommit to the Committee on House Administration.',
      acted_at: '2021-03-03T23:16:28+00:00',
    },
    {
      id: 'hr1-117-49',
      text:
        'The previous question on the motion to recommit was ordered pursuant to the rule.',
      acted_at: '2021-03-03T23:16:45+00:00',
    },
    {
      id: 'hr1-117-50',
      text:
        'POSTPONED PROCEEDINGS - The Chair put the question on the motion to recommit and by voice vote, announced that the noes had prevailed. Mr. Rodney Davis (IL) demanded the yeas and nays and the Chair postponed further proceedings until a time to be announced.',
      acted_at: '2021-03-03T23:16:46+00:00',
    },
    {
      id: 'hr1-117-51',
      text:
        'Pursuant to clause 1(c) of Rule XIX, further consideration of H.R. 1 was postponed.',
      acted_at: '2021-03-03T23:17:58+00:00',
    },
    {
      id: 'hr1-117-52',
      text:
        'Pursuant to clause 1(c) of Rule XIX, the House resumed with further consideration of H.R. 1.',
      acted_at: '2021-03-04T02:30:32+00:00',
    },
    {
      id: 'hr1-117-53',
      text: 'Considered as unfinished business.',
      acted_at: '2021-03-04T02:30:33+00:00',
    },
    {
      id: 'hr1-117-54',
      text:
        'On motion to recommit Failed by the Yeas and Nays: 210 - 219 (Roll no. 61).',
      acted_at: '2021-03-04T03:20:54+00:00',
    },
    {
      id: 'hr1-117-55',
      text: 'On passage Passed by the Yeas and Nays: 220 - 210 (Roll no. 62).',
      acted_at: '2021-03-04T04:05:36+00:00',
    },
    {
      id: 'hr1-117-56',
      text:
        'Motion to reconsider laid on the table Agreed to without objection.',
      acted_at: '2021-03-04T04:05:39+00:00',
    },
    {
      id: 'hr1-117-57',
      text:
        'The Clerk was authorized to correct section numbers, punctuation, and cross references, and to make other necessary technical and conforming corrections in the engrossment of H.R. 1.',
      acted_at: '2021-03-04T04:05:48+00:00',
    },
    {
      id: 'hr1-117-42',
      text:
        'Pursuant to clause 1(c) of Rule XIX, the House resumed with further consideration of H.R. 1.',
      acted_at: '2021-03-03T17:16:21+00:00',
    },
    {
      id: 'hr1-117-41',
      text:
        'Pursuant to clause 1(c) of Rule XIX, further consideration of H.R. 1 was postponed.',
      acted_at: '2021-03-03T16:34:05+00:00',
    },
    {
      id: 'hr1-117-38',
      text:
        'POSTPONED PROCEEDINGS - At the conclusion of debate on the Pressley amendment, the Chair put the question on the agreeing to the amendment and by voice vote, announced that the noes had prevailed. Mr. Rodney Davis (IL) demanded yeas and nays and the Chair postponed further proceedings until a time to be announced.',
      acted_at: '2021-03-03T16:05:45+00:00',
    },
    {
      id: 'hr1-117-12',
      text:
        'Referred to the Subcommittee on the Constitution, Civil Rights, and Civil Liberties.',
      acted_at: '2021-03-01T00:00:00+00:00',
    },
    {
      id: 'hr1-117-2',
      text:
        'Referred to the Committee on House Administration, and in addition to the Committees on Intelligence (Permanent Select), the Judiciary, Oversight and Reform, Science, Space, and Technology, Education and Labor, Ways and Means, Financial Services, Ethics, Homeland Security, and Armed Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
      acted_at: '2021-01-04T00:00:00+00:00',
    },
    {
      id: 'hr1-117-40',
      text:
        'POSTPONED PROCEEDINGS - At the conclusion of debate on the Lofgren amendment en bloc No. 4, the Chair put the question on agreeing to the amendment and by voice vote, announced that the ayes had prevailed. Mr. Gohmert demanded the yeas and nays and the Chair postponed further proceedings until a time to be announced.',
      acted_at: '2021-03-03T16:33:20+00:00',
    },
    {
      id: 'hr1-117-58',
      text: 'Received in the Senate.',
      acted_at: '2021-03-11T00:00:00+00:00',
    },
  ],
};
