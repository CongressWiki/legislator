import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '@components/Layouts/BillFeed';
import type { Bill, Official, OfficialWithImage } from '@type/hasura';
import SEO from '@components/Seo';
import BillLane from '@components/BillLane';
import BillLaneHeader from '@components/BillLaneHeader';
import BillLaneFooter from '@components/BillLaneFooter';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
// import withApollo from '@utils/withApollo';
import { search } from '@utils/Search';
import type { PageProps } from 'gatsby';

import BillCard from '@components/BillCard';

export type BillsAndCongressImagesQuery = {
  hasura: {
    bills: {
      nodes: Bill[];
      aggregate: {
        count: number;
      };
    };
    electedOfficials: Official[];
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

function Home(_props: PageProps) {
  const data: BillsAndCongressImagesQuery = useStaticQuery(graphql`
    query BillsAndCongressImages {
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
      }
    }
  `);

  const images = data.congressImages.nodes;
  let bills: Array<Bill & { sponsor?: OfficialWithImage }> =
    data.hasura.bills.nodes;
  const electedOfficials = data.hasura.electedOfficials;

  const findElectedOfficial = (elected_official_id: string) =>
    electedOfficials.find(
      (electedOfficial) => electedOfficial.id === elected_official_id
    );
  const findElectedOfficialImage = (elected_official_id: string) =>
    images.find((image) => image.name === elected_official_id);

  // @ts-expect-error
  bills = bills.map((bill) => ({
    ...bill,
    sponsor: {
      ...findElectedOfficial(bill.sponsor_id),
      image: findElectedOfficialImage(bill.sponsor_id),
    },
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

    // @ts-expect-error
    setBillTypes(CHAMBER_BILL_TYPES[option]);
  };

  const handleSearchInput = (value: string) => {
    setSearchBy(value.toLowerCase());
  };

  const handleOrderAscToggle = (isAscending: boolean) => {
    setOrderByAsc(isAscending);
  };

  let filteredBills = bills.filter((bill) => {
    const isBillType = billTypes.length === 0 || billTypes.includes(bill.type);

    const matchesSearchBy =
      !searchBy ||
      bill.id.toLowerCase().includes(searchBy) ||
      bill.sponsor.preferred_name.toLocaleLowerCase().includes(searchBy) ||
      bill.title.toLowerCase().includes(searchBy);

    if (isBillType && matchesSearchBy) return bill;
  });

  if (searchBy) {
    filteredBills = search(filteredBills, searchBy, {
      keys: [
        'id',
        'number',
        'type',
        'title',
        'sponsor.preferred_name',
        'sponsor.political_party',
        'sponsor.state',
        'updated_at',
      ],
    });
  }

  if (orderByAsc) filteredBills.reverse();

  const loadMore = () => setLimit(limit + limitIncrement);

  return (
    <>
      <SEO title="Latest Bills" pathname="/" />
      <Layout>
        <BillLane>
          <BillLaneHeader
            handleChamberSelection={handleChamberSelection}
            handleSearchInput={handleSearchInput}
            handleOrderAscToggle={handleOrderAscToggle}
            billCount={filteredBills.length || 0}
          />
          {filteredBills.slice(offset, limit).map((bill) => (
            <BillCard key={bill.id} {...bill} />
          ))}
        </BillLane>
        <BillLaneFooter
          disabled={limit > filteredBills.length}
          onClick={loadMore}
        />
      </Layout>
    </>
  );
}

// export default withApollo(Home);
export default Home;
