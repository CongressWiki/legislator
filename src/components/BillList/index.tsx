import React from 'react';
import styled from 'styled-components';
import BillParagraph from '@components/BillParagraph';
import BillListItem from '@components/BillListItem';

export type BillListProps = {
  paragraph: string;
  index: number;
};

const BillList = ({ paragraph, index }: BillListProps) => {
  const deliminator = /;/g.test(paragraph) ? /;/g : /,(?!\s\d)/g;

  const listStatements = paragraph.split(deliminator);
  const lastStatement = listStatements[listStatements.length - 1] || '';

  const lastStatementHasMultiSentences =
    lastStatement.split(/\.(?!e)/g).length > 1;

  if (!lastStatementHasMultiSentences) {
    const listItems = listStatements.map((statement, index) => (
      <BillListItem key={index} statement={statement} />
    ));
    return <UnorderedList>{listItems}</UnorderedList>;
  }

  if (lastStatementHasMultiSentences) {
    const lastStatementSentences = lastStatement.split(
      /(?<!(i|e|H|Res))\.+(?!$)/g
    );

    const actualLastStatement = `${lastStatementSentences.shift()}`;
    listStatements[listStatements.length - 1] = actualLastStatement;

    const afterListText = lastStatementSentences.join('');

    const listItems = listStatements.map((statement, index) => (
      <BillListItem key={index} statement={statement} />
    ));

    return (
      <React.Fragment>
        <UnorderedList>{listItems}</UnorderedList>
        {afterListText ? <BillParagraph>{afterListText}</BillParagraph> : null}
      </React.Fragment>
    );
  }

  return <></>;
};

export default BillList;

const UnorderedList = styled.ul`
  margin: 0;
  padding-top: 0.5rem;
`;
