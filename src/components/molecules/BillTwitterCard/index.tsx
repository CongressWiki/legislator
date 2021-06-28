import React, { useEffect, useState } from 'react';
import type { Bill, OfficialWithImage } from '@type/hasura';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import StampText from '@components/atoms/StampText';
import styled from 'styled-components';
import CircleAvatar from '@components/molecules/CircleAvatar';
import SubjectIcon from '@components/atoms/SubjectIcon';
import ButtonCanvas from '@components/atoms/ButtonCanvas';
import createApolloClient from '@utils/ApolloClient';
import { gql } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import truncate from '@utils/truncate';

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
  userVote?: 'Yea' | 'Nay';
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
};

const BillTwitterCard = (props: BillTwitterCardProps) => {
  const {
    id: billId,
    type,
    number,
    title,
    congress,
    subject,
    status,
    sponsor,
    status_at,
    userVote,
    className,
    onClick,
  } = props;

  const {
    isAuthenticated,
    isLoading,
    user,
    getAccessTokenSilently,
    loginWithPopup,
  } = useAuth0();
  const [billUserVote, setBillUserVote] = useState(userVote);

  useEffect(() => {
    setBillUserVote(userVote);
  }, [userVote]);

  async function voteOnBill(decision: 'Yea' | 'Nay') {
    const accessToken = await getAccessTokenSilently();
    const apolloClient = createApolloClient(accessToken);
    return apolloClient.mutate({
      mutation: gql(`mutation getUserProfile(
          $id: String!,
          $user_id: String!,
          $bill_id: String!,
          $decision: String!
          ) {
          insert_bill_user_votes_one(object: {
            id: $id,
            user_id: $user_id,
            bill_id: $bill_id,
            decision: $decision
          }, on_conflict: {constraint: bill_user_votes_pkey, update_columns: decision}) {
            id
            decision
          }
        }
        `),
      variables: {
        id: `${billId}-${user?.sub}`,
        user_id: user?.sub,
        bill_id: billId,
        decision,
      },
    });
  }

  const handleVoteClick = async (decision: 'Yea' | 'Nay') => {
    if (!isAuthenticated || isLoading) {
      await loginWithPopup();
      return;
    }

    const response = await voteOnBill(decision);
    setBillUserVote(response?.data.insert_bill_user_votes_one.decision);
  };

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
      {subject !== 'No Subject' && <p className="bill-subject">{subject}</p>}
      {subject !== 'No Subject' && (
        <SubjectIcon subject={subject} className="bill-subjectIcon" />
      )}

      <Link className="bill-id" to={`${congress}/${type}${number}/`}>
        <p>{`${type.toUpperCase()} ${number}`}</p>
      </Link>

      <p className="bill-title">{truncate(title, 300)}</p>

      <StampText className="bill-status">{status}</StampText>

      <ButtonCanvas
        className="yea"
        onClick={async () => handleVoteClick('Yea')}
      >
        <Vote isUserVote={billUserVote === 'Yea'}>yea</Vote>
      </ButtonCanvas>
      <ButtonCanvas
        className="nay"
        onClick={async () => handleVoteClick('Nay')}
      >
        <Vote isUserVote={billUserVote === 'Nay'}>nay</Vote>
      </ButtonCanvas>
    </Wrapper>
  );
};

const motionVariants = {
  hidden: {
    y: 110,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default BillTwitterCard;

const Vote = styled.span<{ isUserVote?: boolean }>`
  font-size: 1.2rem;
  font-family: advocate_c43_mid;
  color: ${(props) =>
    props.isUserVote ? 'var(--color-secondary)' : 'var(--color-gray500)'};

  :hover {
    color: var(--color-secondary);
  }
`;

const Wrapper = styled(motion.div)<{
  number: number;
}>`
  max-width: 600px;
  width: 100%;

  margin: 0;
  padding-top: 12px;
  padding-left: 16px;
  padding-right: 16px;

  overflow: hidden;

  background-color: var(--color-card);

  border: solid thin var(--color-gray300);
  border-radius: 10px;

  text-align: left;

  display: grid;
  grid-template-columns: 60px repeat(8, 1fr) 40px;
  grid-template-rows: 20px 20px 40px 30px auto 50px 36px;
  grid-template-areas:
    'sponsorImage sponsorName sponsorName sponsorName sponsorName sponsorName subject subject subject  subjectIcon'
    'sponsorImage timestamp   timestamp   timestamp   ........... ........... subject subject subject  subjectIcon'
    'sponsorImage ........... ........... ..........  id          id          ....... ....... .......  subjectIcon'
    'sponsorImage title       title       title       title       title       title   title   title    title'
    'sponsorImage title       title       title       title       title       title   title   title    title'
    'sponsorImage .....       ......      status      status      status      status  ......  ......  ......'
    'sponsorImage .....       ......      yea         ........... ........... nay     ......  ......  ......';
  align-items: start;

  :hover {
    background-color: var(--color-paper);
  }

  p {
    margin: 0;
    font-family: century_supra_t3;
  }

  .yea {
    grid-area: yea;

    height: auto;
    width: auto;
    min-width: unset;
  }

  .nay {
    grid-area: nay;

    height: auto;
    width: auto;
    min-width: unset;
  }

  .bill-sponsorImage {
    grid-area: sponsorImage;
    align-self: start;
  }

  .bill-sponsorName {
    grid-area: sponsorName;

    white-space: nowrap;
    font-size: 0.9rem;
    font-weight: 400;
  }

  .bill-subject {
    grid-area: subject;

    margin-right: 1ch;

    text-align: right;
    white-space: wrap;
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--color-dimText);
  }

  .bill-subjectIcon {
    grid-area: subjectIcon;
    position: relative;
    justify-self: end;

    /* SVGR components typically default to 1em */
    height: auto;
    width: 100%;
    max-width: 2.5rem;

    margin: 0;
    padding: 0;

    path {
      fill: var(--color-dimText);
      stroke: var(--color-dimText);
    }
  }

  .bill-id {
    grid-area: id;
    align-self: center;

    text-align: center;
    font-weight: bold;
    white-space: nowrap;

    :hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }

  .bill-title {
    grid-area: title;
    align-self: start;

    max-width: min(70ch);

    font-size: 1rem;
    letter-spacing: -0.063px;
  }

  .bill-timestamp {
    grid-area: timestamp;

    text-align: left;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-dimText);
  }

  .bill-status {
    grid-area: status;
    justify-self: center;
    align-self: center;

    max-width: 14ch;
    padding: 1px;

    border-width: 3px;

    font-size: 0.7rem;

    // Alternate stamp angle to give it a realistic behavior
    transform: ${(properties) =>
      properties.number % 2 === 1 ? 'rotate(4deg)' : 'rotate(-3deg)'};
  }
`;
