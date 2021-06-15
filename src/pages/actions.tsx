import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '@components/templates/layouts/BillFeed';
import type { Bill, Action, Official, OfficialWithImage } from '@type/hasura';
import SEO from '@components/App/Seo';
import ActionCard from '@components/molecules/ActionCard';
import BillLane from '@components/atoms/BillLane';
import BillLaneHeader from '@components/molecules/BillLaneHeader';
import BillLaneFooter from '@components/molecules/BillLaneFooter';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { search } from '@utils/Search';
import type { PageProps } from 'gatsby';
// Import withApollo from '@utils/withApollo';

export type BillsAndCongressImagesQuery = {
  hasura: {
    bills: {
      nodes: Bill[];
      aggregate: {
        count: number;
      };
    };
    electedOfficials: Official[];
    actions: Action[];
  };
  congressImages: {
    nodes: Array<{
      extension: string;
      name: string;
      modifiedTime: string;
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    }>;
  };
};

const Home = (_properties: PageProps) => {
  const data: BillsAndCongressImagesQuery = useStaticQuery(graphql`
    query BillsAndActionsAndCongressImages {
      congressImages: allFile(
        filter: { sourceInstanceName: { eq: "congressImages" } }
      ) {
        nodes {
          extension
          name
          modifiedTime
          childImageSharp {
            gatsbyImageData(
              width: 50
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      hasura {
        bills: bills_aggregate(order_by: { status_at: desc }) {
          nodes {
            id
            number
            title
            subject
            congress
            status
            status_at
            type
            introduced_at
            short_title
            sponsor_id
          }
          aggregate {
            count
          }
        }
        electedOfficials: elected_officials(order_by: { term_start_at: desc }) {
          id
          is_active
          political_party
          position
          preferred_name
          state
        }
        actions(
          order_by: { acted_at: desc, text: asc }
          where: { bill_id: { _is_null: false } }
        ) {
          acted_at
          id
          text
          type
          vote_type
          status
          action_code
          where
          how
          suspension
          roll
          result
          references
          bill_id
          amendment_id
          committees {
            committee_id
          }
        }
      }
    }
  `);

  const images = data.congressImages.nodes;
  let bills: Array<Bill & { sponsor?: OfficialWithImage }> =
    data.hasura.bills.nodes;
  let { electedOfficials, actions } = data.hasura;

  const findElectedOfficial = (elected_official_id: string) =>
    electedOfficials.find(
      (electedOfficial) => electedOfficial.id === elected_official_id
    );

  const findElectedOfficialImage = (elected_official_id: string) =>
    images.find((image) => image.name === elected_official_id);

  const findBill = (bill_id: string) =>
    bills.find((bill) => bill.id === bill_id);

  // Inject image into elected officials
  electedOfficials = electedOfficials.map((electedOfficial) => ({
    ...electedOfficial,
    image: findElectedOfficialImage(electedOfficial.id),
  }));

  // Inject Sponsor into Bills
  // @ts-expect-error for type reassignment error
  bills = bills.map((bill) => ({
    ...bill,
    sponsor: findElectedOfficial(bill.sponsor_id),
  }));

  // Inject Bill into actions
  actions = actions.map((action) => ({
    ...action,
    bill: findBill(action.bill_id),
  }));

  const [billTypes, setBillTypes] = useState<string[]>([]);
  const [searchBy, setSearchBy] = useState('');
  const [orderByAsc, setOrderByAsc] = useState(false);
  const limitIncrement = 20;
  const [limit, setLimit] = useState(limitIncrement);
  const offset = 0;

  const CHAMBER_BILL_TYPES = {
    House: ['hr', 'hres', 'hconres', 'hjres'],
    Senate: ['s', 'sres', 'sconres', 'sjres'],
    All: [],
  };

  const handleChamberSelection = (option: string) => {
    if (!(option in CHAMBER_BILL_TYPES)) {
      console.error(`No match for chamber selection: ${option}`);
    }

    // @ts-expect-error for unsafe argument rule
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setBillTypes(CHAMBER_BILL_TYPES[option]);
  };

  const handleSearchInput = (value: string) => {
    setSearchBy(value.toLowerCase());
  };

  const handleOrderAscToggle = (isAscending: boolean) => {
    setOrderByAsc(isAscending);
  };

  let filteredActions = actions.filter((action) => {
    const matchesSearchBy = action.text.includes(searchBy);

    return matchesSearchBy ? action : false;
  });

  if (searchBy) {
    filteredActions = search(filteredActions, searchBy, {
      keys: [
        'text',
        'bill.id',
        'bill.number',
        'bill.type',
        'bill.title',
        'bill.sponsor.preferred_name',
        'bill.sponsor.political_party',
        'bill.sponsor.state',
        'bill.updated_at',
      ],
    });
  }

  if (orderByAsc) filteredActions.reverse();

  const loadMore = () => {
    setLimit(limit + limitIncrement);
  };

  console.log({ actions });

  return (
    <Layout>
      <SEO title="Latest Actions" pathname="/" />
      <BillLane>
        <BillLaneHeader
          handleChamberSelection={handleChamberSelection}
          handleSearchInput={handleSearchInput}
          handleOrderAscToggle={handleOrderAscToggle}
          billCount={filteredActions.length || 0}
        />
        {filteredActions.slice(offset, limit).map((action) => (
          <ActionCard key={action.id} {...action} />
        ))}
      </BillLane>
      <BillLaneFooter
        disabled={limit > filteredActions.length}
        onClick={loadMore}
      />
    </Layout>
  );
};

// Export default withApollo(Home);
export default Home;
