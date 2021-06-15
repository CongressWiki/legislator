import React from 'react';
import styled from 'styled-components';
import BillParagraph from '@components/atoms/BillParagraph';
import BillListItem from '@components/atoms/BillListItem';

export type BillListProps = {
  paragraph: string;
  index: number;
};

const BillList = ({ paragraph, index }: BillListProps) => {
  const deliminator = /;/g.test(paragraph) ? /;/g : /,(?!\s\d)/g;

  const listStatements = paragraph.split(deliminator);

  const listItems = listStatements.map((statement, index) => (
    <BillListItem key={index} statement={statement} />
  ));
  return <UnorderedList>{listItems}</UnorderedList>;
};

export default BillList;

const UnorderedList = styled.ul`
  margin: 0;
  padding-top: 0.5rem;
`;
