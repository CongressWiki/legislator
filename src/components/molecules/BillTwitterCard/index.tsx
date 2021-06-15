import React from 'react';
import type { Bill, OfficialWithImage } from '@type/hasura';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import StampText from '@components/atoms/StampText';
import styled from 'styled-components';
import CircleAvatar from '@components/molecules/CircleAvatar';
import Arrow from '@icons/misc/Arrow';
import SubjectIcon from '@components/atoms/SubjectIcon';

export type BillTwitterCardProps = Pick<
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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
};

const BillTwitterCard = (props: BillTwitterCardProps) => {
  const {
    type,
    number,
    title,
    congress,
    subject,
    status,
    sponsor,
    status_at,
    className = '',
    onClick = () => {},
  } = props;

  return (
    <Wrapper
      layout
      className={className}
      variants={motionVariants}
      number={Number(number)}
      onClick={onClick}
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
        {`${sponsor.preferred_name} · ${sponsor.state}`}
      </p>
      <p className="bill-timestamp">{new Date(status_at).toDateString()}</p>
      <p className="bill-subject">{subject}</p>
      <SubjectIcon subject={subject} className="bill-subjectIcon" />

      <p className="bill-number">{`${type.toUpperCase()} ${number}`}</p>

      <p className="bill-title">{title}</p>

      <StampText className="bill-status">{status}</StampText>
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

export default BillTwitterCard;

const Wrapper = styled(motion.div)<{ number: number }>`
  max-width: none;
  width: 100%;
  margin: 0;
  padding-top: 0.75rem;
  padding-left: 1em;
  padding-right: 1em;

  display: grid;
  grid-template-columns: 62px repeat(9, 1fr);
  grid-template-rows: 20px 2.5em 30px 1fr 70px;
  grid-template-areas:
    'sponsorImage sponsorName sponsorName sponsorName sponsorName sponsorName subject subject subject  subject'
    'sponsorImage timestamp   timestamp   timestamp   timestamp   ........... ....... ....... .......  subjectIcon'
    'sponsorImage ........... ........... id          id          id          id      ......  ......   ......'
    'sponsorImage title       title       title       title       title       title   title   title    title'
    'sponsorImage .....       ......      status      status      status      status  ......  openBill openBill';

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
    margin-right: 0.75em;
  }

  .bill-sponsorName {
    grid-area: sponsorName;
    font-size: 0.9em;
    font-weight: 400;
    white-space: nowrap;
  }

  .bill-subject {
    grid-area: subject;
    text-align: right;

    color: var(--color-dimText);
    font-size: 0.8rem;
    font-weight: 400;

    white-space: nowrap;
  }

  .bill-subjectIcon {
    grid-area: subjectIcon;
    justify-self: end;

    position: relative;

    width: 100%;
    max-width: 2.5em;

    /* SVGR components typically default to 1em */
    height: auto;

    margin: 0;
    padding: 0;

    path {
      fill: var(--color-dimText);
      stroke: var(--color-dimText);
    }
  }

  .bill-number {
    grid-area: id;
    text-align: center;
    font-weight: bold;
    white-space: nowrap;
  }

  .bill-title {
    grid-area: title;
    max-width: min(70ch);

    align-self: start;

    font-size: 1.1em;
    letter-spacing: -0.063px;
  }

  .bill-timestamp {
    grid-area: timestamp;
    text-align: left;

    font-size: 0.8em;
    color: var(--color-dimText);
    font-weight: 400;
  }

  .bill-status {
    grid-area: status;

    justify-self: center;

    font-size: 0.8em;
    border-width: 0.2em;

    // Alternate stamp angle to give it a realistic behavior
    transform: ${(properties) =>
      properties.number % 2 === 1 ? 'rotate(4deg)' : 'rotate(-3deg)'};
  }

  .bill-open {
    grid-area: openBill;

    width: 100%;
    max-width: 2.5em;
    height: auto;

    justify-self: end;
    align-self: center;
    align-items: center;
    text-align: center;

    svg {
      width: 100%;
      height: auto;
      max-width: 100%;
      max-height: 100%;
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
  }
`;
