import React from 'react';
import type { Bill, OfficialWithImage } from '@type/hasura';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import StampText from '@components/StampText';
import styled from 'styled-components';
import CircleAvatar from '@components/CircleAvatar';
import Arrow from '@components/icons/Arrow';
import { normalizeBillStatus, getOriginalChamber } from '@constants';

export type BillCardProps = Pick<
  Bill,
  | 'id'
  | 'type'
  | 'number'
  | 'title'
  | 'subject'
  | 'updated_at'
  | 'congress'
  | 'status'
> & {
  onClick?: () => void;
  className?: string;
  sponsor: OfficialWithImage;
};

const BillCard = ({
  onClick,
  type,
  number,
  title,
  congress,
  subject,
  status,
  sponsor,
  updated_at,
  className,
}: BillCardProps) => {
  const originalBillChamber = getOriginalChamber(type);
  const billStatus = normalizeBillStatus(status, originalBillChamber);

  return (
    <Wrapper className={className} onClick={onClick} variants={motionVariants}>
      <CircleAvatar
        className="bill-sponsorImage"
        preferred_name={sponsor.preferred_name}
        political_party={sponsor.political_party}
        image={sponsor.image}
        loading="lazy"
      />
      <p className="bill-sponsorName">
        {sponsor.preferred_name} · {sponsor.state}
      </p>
      <SmallStampText className="bill-status">{billStatus}</SmallStampText>
      <p className="bill-timestamp">{new Date(updated_at).toDateString()}</p>

      <p className="bill-number">{`${type.toUpperCase()} ${number}`}</p>

      <p className="bill-title">{title}</p>

      <div className="bill-open">
        <Link to={`${congress}/${type}${number}/`}>
          <Arrow />
        </Link>
      </div>
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

const Wrapper = styled(motion.div)`
  max-width: none;
  width: 100%;
  margin: 0;
  padding-top: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;

  display: grid;
  grid-template-columns: 62px repeat(9, 1fr);
  grid-template-rows: 30px 30px 1fr 70px;
  grid-template-areas:
    'sponsorImage sponsorName sponsorName sponsorName sponsorName    sponsorName    timestamp timestamp timestamp    timestamp'
    'sponsorImage ........... ........... id          id             id             id          ...... ......... .........'
    'sponsorImage title       title       title       title          title          title       title  title     title'
    'sponsorImage ......      ......      ......      status         status         .....       ...... viewBillButton    viewBillButton';

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
    position: relative;
    margin: 0;
    padding: 0;
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
    font-size: 1rem;
    border-width: 0.2rem;
    transform: rotate(4deg);
  }

  .bill-open {
    grid-area: viewBillButton;
    justify-self: end;
    align-self: center;
    height: 2.5rem;
    width: 2.5rem;

    :hover {
      svg {
        path {
          fill: var(--color-secondary);
        }
      }
    }
  }
`;

const SmallStampText = styled(StampText)`
  padding: 0.1rem;
  font-size: 8px;

  mask-size: 472px 302px;
  -webkit-mask-size: 472px 302px;
  mask-position: 472px 302px;
  -webkit-mask-position: 472px 302px;
  mix-blend-mode: normal;

  max-height: 50px;
`;
