import React from 'react';
import type { Bill, OfficialWithImage } from '@type/hasura';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import StampText from '@components/StampText';
import styled from 'styled-components';
import CircleAvatar from '@components/CircleAvatar';
import Arrow from '@icons/misc/Arrow';
import { normalizeBillStatus, getOriginalChamber } from '@constants';
import SubjectIcon from '@components/SubjectIcon';

export type BillCardProps = Pick<
  Bill,
  | 'id'
  | 'type'
  | 'number'
  | 'congress'
  | 'title'
  | 'subject'
  | 'status'
  | 'status_at'
> & {
  sponsor: OfficialWithImage;
  onClick?: () => void;
  className?: string;
};

const BillCard = ({
  type,
  number,
  title,
  congress,
  subject,
  status,
  sponsor,
  status_at,
  className,
  onClick,
}: BillCardProps) => {
  const originalBillChamber = getOriginalChamber(type);
  const billStatus = normalizeBillStatus(status, originalBillChamber);

  return (
    <Wrapper
      className={className}
      onClick={onClick}
      variants={motionVariants}
      number={number}
    >
      <Link to={`officials/${sponsor.id}`}>
        <CircleAvatar
          className="bill-sponsorImage"
          preferred_name={sponsor.preferred_name}
          political_party={sponsor.political_party}
          image={sponsor.image}
          loading="lazy"
        />
      </Link>
      <p className="bill-sponsorName">
        {sponsor.preferred_name} · {sponsor.state}
      </p>
      {/* <p className="bill-timestamp">{new Date(status_at).toDateString()}</p> */}
      <p className="bill-subject">{subject}</p>
      <SubjectIcon subject={subject} className="bill-subjectIcon" />

      <p className="bill-number">{`${type.toUpperCase()} ${number}`}</p>

      <p className="bill-title">{title}</p>

      <StampText className="bill-status">{billStatus}</StampText>
      <Link className="bill-open" to={`${congress}/${type}${number}/`}>
        <Arrow />
      </Link>
    </Wrapper>
  );
};

const motionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default BillCard;

const Wrapper = styled(motion.div)<{ number: number }>`
  max-width: none;
  width: 100%;
  margin: 0;
  padding-top: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;

  display: grid;
  grid-template-columns: 62px repeat(9, 1fr);
  grid-template-rows: 50px 30px 1fr 70px;
  grid-template-areas:
    'sponsorImage sponsorName sponsorName sponsorName sponsorName    sponsorName   subject   subject    subject subjectIcon'
    'sponsorImage ........... ........... id          id             id        id        ......     ......  ......'
    'sponsorImage title       title       title       title          title     title     title      title   title'
    'sponsorImage .....       ......      status      status         status    status     ......     openBill  openBill';

  border: solid thin var(--color-gray300);
  border-radius: 10px;

  text-align: left;
  align-items: start;

  p {
    font-family: century_supra_t3;
    margin: 0;
  }

  :hover {
    background-color: var(--color-background);
  }

  .bill-sponsorImage {
    grid-area: sponsorImage;
    align-self: start;
    margin-right: 0.75rem;
  }

  .bill-sponsorName {
    grid-area: sponsorName;
    font-weight: 300;
    font-size: 0.9rem;
  }

  .bill-subject {
    grid-area: subject;
    text-align: right;
    align-self: start;
    font-size: 0.8rem;
    color: var(--color-dimText);
    font-weight: 400;

    @media (max-width: 450px) {
      visibility: hidden;
      display: hidden;
      opacity: 0;
    }
  }

  .bill-subjectIcon {
    grid-area: subjectIcon;
    position: relative;

    width: 100%;
    height: auto;
    max-width: 2.5rem;
    max-height: 100%;

    margin: 0;
    padding: 0;

    text-align: right;
    justify-self: end;

    path {
      fill: var(--color-dimText);
      stroke: var(--color-dimText);
    }
  }

  .bill-number {
    grid-area: id;
    align-self: start;
    justify-self: center;
    font-weight: 700;
    white-space: nowrap;
  }

  .bill-title {
    grid-area: title;
    max-width: min(70ch);
    align-self: start;
    font-size: 1.1rem;
    letter-spacing: -0.063px;

    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }

  .bill-timestamp {
    grid-area: timestamp;
    text-align: right;
    align-self: start;
    font-size: 0.8rem;
    color: var(--color-dimText);
    font-weight: 400;
  }

  .bill-status {
    grid-area: status;
    max-width: 15ch;
    padding: 1px;

    justify-self: center;

    font-size: 1rem;
    border-width: 0.3rem;

    // Alternate stamp angle to give it a realistic behavior
    transform: ${(props) =>
      props.number % 2 === 1 ? 'rotate(4deg)' : 'rotate(-3deg)'};
  }

  .bill-open {
    grid-area: openBill;

    width: 100%;
    max-width: 2.5rem;
    height: auto;
    align-self: center;
    text-align: center;
    align-items: center;
    justify-self: end;

    svg {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: auto;
      path {
        fill: var(--color-text);
      }
    }

    :hover {
      svg {
        path {
          fill: var(--color-secondary);
        }
      }
    }

    @media (max-width: 450px) {
      svg {
        width: 100%;
      }
    }
  }
`;
