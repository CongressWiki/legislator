import React, { useState } from 'react';
import styled from 'styled-components';
import type { Bill } from '@type/hasura';
import BillCard from '@components/molecules/BillTwitterCard';
import useInfiniteScroll from '@utils/useInfiniteScroll';
import Spinner from '@components/atoms/Spinner';
import { motion, AnimateSharedLayout } from 'framer-motion';

export type BillCardGridProps = {
  bills: Bill[];
};

const BillCardGrid = ({ bills }: BillCardGridProps) => {
  const increment = 30;
  const [listLength, setListLength] = useState(increment);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListLength((prevState) => prevState + increment);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <>
      <AnimateSharedLayout>
        <Grid
          layout
          variants={motionVariants}
          initial="hidden"
          animate="visible"
        >
          {bills.slice(0, listLength).map((bill) => (
            <BillCard key={bill.id} {...bill} />
          ))}
        </Grid>
      </AnimateSharedLayout>
      {isFetching && <Spinner />}
    </>
  );
};

export default BillCardGrid;

const motionVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const Grid = styled(motion.div)`
  position: relative;

  padding: 10vh 30vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
`;
