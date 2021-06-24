import React, { useState } from 'react';
import type { Bill, OfficialWithImage } from '@type/hasura';
import BillCard from '@components/molecules/BillTwitterCard';
import useInfiniteScroll from '@utils/useInfiniteScroll';
import Spinner from '@components/atoms/Spinner';
import { search } from '@utils/Search';
import BillLane from '@components/atoms/BillLane';
import BillLaneHeader from '@components/molecules/BillLaneHeader';
import styled from 'styled-components';

const CHAMBER_BILL_TYPES = {
  House: ['hr', 'hres', 'hconres', 'hjres'],
  Senate: ['s', 'sres', 'sconres', 'sjres'],
  All: [],
};

export type BillCardGridProps = {
  bills: Array<
    Bill & { sponsor?: OfficialWithImage; userVote?: 'Yea' | 'Nay' }
  >;
};

const BillCardFeed = ({ bills }: BillCardGridProps) => {
  const increment = 20;
  const [limit, setLimit] = useState(increment);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [billTypes, setBillTypes] = useState<string[]>([]);
  const [searchBy, setSearchBy] = useState('');
  const [orderByAsc, setOrderByAsc] = useState(false);
  const offset = 0;

  function fetchMoreListItems() {
    setTimeout(() => {
      setLimit((prevState) => prevState + increment);
      setIsFetching(false);
    }, Math.random() * 1500);
  }

  const handleChamberSelection = (option: string) => {
    if (!(option in CHAMBER_BILL_TYPES)) {
      console.error(`No match for chamber selection: ${option}`);
    }

    // @ts-expect-error not going to list every key
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setBillTypes(CHAMBER_BILL_TYPES[option]);
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBy(event.target.value.toLowerCase());
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

    return isBillType && matchesSearchBy ? bill : undefined;
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

  return (
    <>
      <BillLane>
        <BillLaneHeader
          handleChamberSelection={handleChamberSelection}
          handleSearchInput={handleSearchInput}
          handleOrderAscToggle={handleOrderAscToggle}
          billCount={filteredBills.length || 0}
          searchBy={searchBy}
        />
        {filteredBills.slice(offset, limit).map((bill) => (
          <BillCard key={bill.id} {...bill} />
        ))}
      </BillLane>
      {isFetching && <StyledSpinner />}
    </>
  );
};

export default BillCardFeed;

const StyledSpinner = styled(Spinner)`
  margin-top: 50px;
`;
