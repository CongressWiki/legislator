import React from 'react';
import styled from 'styled-components';
import type { Bill } from '@type/hasura';
// import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import truncate from '@utils/truncate';

export type BillCardProps = {
  bill: Bill;
};

/**
 * TODO: Modify to present...
 * 1. current chamber
 * 2. progress
 * 3. subject
 * 4. sponsor
 * 5. recently updated
 * 6. Introduced at
 * 7. political party
 */

const BillCard = ({ bill }: BillCardProps) => {
  return (
    // <Link to={`${bill.congress}/${bill.type}${bill.number}/`}>
    <Paper
      layout
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
        zIndex: 2,
      }}
      whileTap={{ scale: 1.4 }}
      variants={motionVariants}
    >
      <Id>{makeTitle(bill)}</Id>
      <Title>{getShortestTitle(bill)}</Title>
    </Paper>
    // </Link>
  );
};

export default BillCard;

const makeTitle = (bill: Bill) => `${bill.type.toUpperCase()} ${bill.number}`;
const getShortestTitle = (bill: Bill) =>
  bill.short_title ?? truncate(bill.title, 200);

const motionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Paper = styled(motion.div)`
  position: relative;
  width: 168px;
  height: 300px;

  overflow: hidden;

  padding: 0.7rem;
  border: var(--color-gray300) solid thin;

  background-color: var(--color-paper);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Id = styled.h4`
  text-align: center;
  font-size: 16px;
  margin: 35px 0;
`;

const Title = styled.p`
  max-width: 70ch;
  font-size: 12px;
  font-family: century_supra_t3;
  text-overflow: ellipsis;
`;
