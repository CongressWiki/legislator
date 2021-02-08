import React from 'react';
import Layout from '@components/Layout';
import type { Bill as BillData } from '../types/hasura';
import styled from 'styled-components';
import USStates from '@components/UsStates';

export type BillProps = {
  pageContext: BillData;
};

export default function Bill({ pageContext: bill }: BillProps) {
  return (
    <Layout>
      <BillWrapper>
        <BillHeader>
          <BillId>
            {bill.type.toUpperCase()}-{bill.number}
          </BillId>
          <BillSubject>{bill.subject}</BillSubject>
        </BillHeader>
        {renderTitle(bill.title)}
        {renderSummary(bill.summary)}
        <USStates />
      </BillWrapper>
    </Layout>
  );
}

const BillWrapper = styled.div``;

const BillHeader = styled.div`
  padding-top: 19px;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const BillId = styled.h2`
  padding-top: 19px;
  margin: 0;
  font-weight: normal;
`;

const BillSubject = styled.h2`
  padding-top: 19px;
  margin: 0;
  font-weight: normal;
`;

const renderTitle = (title: string) => {
  if (title.length > 100) {
    return (
      <BillTitle
        style={{
          fontSize: 'calc(48px/4 * 3)',
          lineHeight: 'calc(60px/4 * 3)',
        }}
      >
        {title}
      </BillTitle>
    );
  }
  return <BillTitle>{title}</BillTitle>;
};

const BillTitle = styled.h3`
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.011em;
  font-weight: 400;
  padding-top: 26px;
  margin: 0;
`;

const renderSummary = (summary: string) => {
  console.log(summary);

  if (summary === 'No summary available.') {
    return <NoSummaryPlaceholder>No summary available.</NoSummaryPlaceholder>;
  }

  // Remove citations i.e. (2)
  summary = summary.replace(/\(\d*\)([^\S\r\n])?/g, '');
  // Remove horizontal spaces (\h) (horizontal space chars come from Perl and is not supported by Node regex)
  summary = summary.replace(/[^\S\r\n]/g, ' ');
  // Add Ellipsis to paragraphs that end with "to" | "include" | "for"
  summary = summary.replace(/(to|include|for)\n/g, '$1...');

  summary = summary.replace(/(For more detailed information)(,)?/g, '$1...\n');

  // If the first sentence is a statement that includes "of Act" then separate it from the regular text
  if (/^[\S\s]*Act( of [\d]+)? [A-Z]/g.test(summary)) {
    // TODO: Render in italics/bold
    summary = summary.replace(/(^[\S\s]*Act( of [\d]+)?) (\w)/g, '$1\n $3');
  }

  const summaryParagraphs = summary.split('\n');

  return summaryParagraphs.map((paragraph, index) => {
    if (paragraph === '') return;

    // If previous paragraph ended with "{includes|to|for}..." render paragraph as list
    if (index > 0 && summaryParagraphs[index - 1].endsWith('...')) {
      return renderAsList(paragraph, index);
    }

    // If paragraph contains ":" then render the colon's right side as list
    if (/:.*?(;|,)/g.test(paragraph)) {
      const colonSplitParagraph = paragraph.split(/:/g);

      return (
        <React.Fragment key={index}>
          <SummaryParagraph>{colonSplitParagraph.shift()}:</SummaryParagraph>
          {renderAsList(colonSplitParagraph.join(''), index)}
        </React.Fragment>
      );
    }

    if (
      paragraph.split('.').length <= 1 &&
      /(Act|Bill of Rights)/g.test(paragraph)
    ) {
      return <BillOfActStatement key={index}>{paragraph}</BillOfActStatement>;
    }

    return <SummaryParagraph key={index}>{paragraph}</SummaryParagraph>;
  });
};

const NoSummaryPlaceholder = styled.h2`
  color: var(--color-gray300);
  padding-top: 42px;
  margin: 0;
`;

const BillOfActStatement = styled.p`
  font-style: italic;
  font-size: 16px;
  margin: 0;
  padding-top: 16px;
`;

const SummaryParagraph = styled.p`
  font-size: 21px;
  line-height: 32px;
  letter-spacing: -0.063px;
  font-family: charter;
  font-weight: 400;
  padding-top: 42px;
  margin: 0;
`;

const renderAsList = (paragraph: string, index: number) => {
  // Test with: http://localhost:8000/hres6-116/

  const deliminator = /;/g.test(paragraph) ? /;/g : /,(?!\s\d)/g;

  let listStatements = paragraph.split(deliminator);
  let lastStatement = listStatements[listStatements.length - 1] || '';

  const lastStatementHasMultiSentences =
    lastStatement.split(/\.(?!e)/g).length > 1;

  if (!lastStatementHasMultiSentences) {
    const listItems = listStatements.map((statement, index) =>
      renderListItem(statement, index)
    );
    return <UnorderedList key={index}>{listItems}</UnorderedList>;
  }

  if (lastStatementHasMultiSentences) {
    const lastStatementSentences = lastStatement.split(
      /(?<!(i|e|H|Res))\.+(?!$)/g
    );

    const actualLastStatement = `${lastStatementSentences.shift()}`;
    listStatements[listStatements.length - 1] = actualLastStatement;

    const afterListText = lastStatementSentences.join('');

    const listItems = listStatements.map((statement, index) =>
      renderListItem(statement, index)
    );

    return (
      <React.Fragment key={index}>
        <UnorderedList>{listItems}</UnorderedList>
        {afterListText ? (
          <SummaryParagraph>{afterListText}</SummaryParagraph>
        ) : null}
      </React.Fragment>
    );
  }
};

const UnorderedList = styled.ul`
  margin: 0;
  padding-top: 8;
`;

const renderListItem = (statement: string, index: number) => {
  if (statement.startsWith(' ')) {
    statement = statement.replace(/^\s*/, '');
  }

  if (statement.startsWith('and')) {
    statement = statement.replace(/^and\s*/, '');
  }

  if (!statement.endsWith('.')) {
    statement += '.';
  }

  statement = statement[0].toUpperCase() + statement.slice(1);

  return <ListItem key={index}>{statement}</ListItem>;
};

const ListItem = styled.li`
  line-height: 32p;
  letter-spacing: -0.063px;
  font-size: 21px;
  font-family: charter;
  font-weight: 400;
  padding-top: 22px;
  margin: 0;
`;
