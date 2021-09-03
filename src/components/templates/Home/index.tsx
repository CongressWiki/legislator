import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Seo from '@components/App/Seo';
import BillCardFeed from '@components/organisms/BillCardFeed';
import type { Bill, OfficialWithImage } from '@type/hasura';
import Header, { HeaderSpacer } from '@components/organisms/Header';
import createApolloClient from '@utils/ApolloClient';
import { gql } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';

export type HomeProps = {
  bills: Array<
    Bill & { sponsor?: OfficialWithImage; userVote?: 'Yea' | 'Nay' }
  >;
};

const Home = ({ bills }: HomeProps) => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [userBillVotes, setUserBillVotes] = useState([]);
  const [billsInState, setBillsInState] = useState(bills);

  const injectUserVotes = (bills: HomeProps['bills']) => {
    return bills.map((bill) => {
      bill.userVote = userBillVotes.find(
        (userBillVote) => userBillVote.bill_id === bill.id
      )?.decision;
      return bill;
    });
  };

  useEffect(() => {
    async function getUserBillVotes() {
      const accessToken = await getAccessTokenSilently();
      const apolloClient = createApolloClient(accessToken);
      const response = await apolloClient.query({
        query: gql(
          `query queryBillUserVotes(
            $user_id: String = ""
           ) {
            bill_user_votes(where: {user_id: {_eq: $user_id}}) {
              id
              user_id
              bill_id
              decision
            }
          }`
        ),
        variables: { user_id: user?.sub },
      });
      setUserBillVotes(response?.data.bill_user_votes);
    }

    if (isAuthenticated && user?.sub) {
      getUserBillVotes();
    }
  }, [isAuthenticated, user, getAccessTokenSilently]);

  useEffect(() => {
    setBillsInState(injectUserVotes(billsInState));
  }, [userBillVotes]);

  return (
    <>
      <Header />
      <HeaderSpacer />
      <Layout>
        <Seo title="Bills" pathname="/" />
        <BillCardFeed bills={billsInState} />
      </Layout>
    </>
  );
};

export default Home;

const Layout = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr;

  margin: 0;
  padding: 0;

  > * {
    grid-column: 2;
  }

  .left-side {
    grid-column: 1 / 2;
  }

  .right-side {
    grid-column: 3 / 4;
  }

  .full-bleed {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;

    > * {
      grid-column: 1;
    }
  }

  margin-bottom: 50vh;
`;
